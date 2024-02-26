import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import ReviewPopup from "../../Utils/Modals/ReviewPopup/ReviewPopup";
import { useGetReviewsApiQuery } from "../../store/services/services";
import { Rate } from "antd";
import { useSelector } from "react-redux";
import { Navigation, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Spin } from "antd";
import "swiper/css";
import "swiper/css/navigation";
import UserReviewPopup from "../../Utils/Modals/UserReviewPopup";
import Layout from "../../layout/Layout";

const Ratings = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [userReview, setUserReview] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [rating, setRating] = useState();
  const [review, setReview] = useState("");

  const { data, refetch, isLoading, isError, error } = useGetReviewsApiQuery();
  const isSuccess = useSelector((state) => state.success.isSuccess);

  // review modal popup
  const showModal = () => {
    setIsReviewModalOpen(true);
  };
  const handleOk = () => {
    setIsReviewModalOpen(false);
  };
  const handleCancel = () => {
    setIsReviewModalOpen(false);
    setRating('')
     setReview("");
  };
  // user's complete review popup
  const showReviewModal = (review) => {
    setUserReview(true);
    setSelectedReview(review);
  };
  const handleReviewOk = () => {
    setUserReview(false);
    setSelectedReview(null);
  };
  const handleReviewCancel = () => {
    setUserReview(false);
     setSelectedReview(null);
  };
  // refetch data
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  // slides breakpoints
  const breakpoints = {
    1440: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
    },
    280: {
      slidesPerView: 1,
    },
  };

  return (
    <Layout>
      <div className="px-40 xl:px-8 xs:px-4">
        <div className="flex justify-between mt-12 items-center sm:mt-1 sm:flex-col">
          <h1 className="text-[44px] font-bold lg:text-2xl sm:text-lg sm:text-center sm:mt-5">
            See why our customers choose Docoptimizer
          </h1>
          <button
            className="bg-primary text-grey px-5 py-1 rounded-md sm:mt-2"
            onClick={showModal}
          >
            Give Review
          </button>
        </div>
        <div className="w-full m-auto">
          {isLoading && (
            <p className="text-center mt-5">
              <Spin />
            </p>
          )}
          {isError && <p>{error.message}</p>}
          <Swiper
            modules={[Navigation, Scrollbar, Autoplay]}
            breakpoints={breakpoints}
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // Responsive breakpoints
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data?.data?.map((ratings, i) => (
              <SwiperSlide key={i}>
                <div className="px-6 mb-4 py-3 mt-4 bg-primary rounded-md w-500 h-48">
                  <div className="flex justify-between items-center pb-3">
                    <Rate value={ratings?.ratings[0]?.rating} disabled />
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="flex items-center gap-1 pb-3">
                        <i className="fas fa-user text-lightGrey"></i>
                        <p className="font-bold">{ratings?.name}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="fas fa-envelope text-lightGrey"></i>
                        <p>{ratings?.email}</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold lg:text-sm overflow-hidden whitespace-nowrap text-overflow-ellipsis mt-3">
                    {ratings?.ratings[0]?.review.length > 32 ? (
                      <div>
                        <p>{ratings?.ratings[0]?.review.slice(0, 32)}...</p>
                        <button
                          className="text-black p-1 rounded-md border border-mainDark bg-primary text-xs mt-2"
                          onClick={() =>
                            showReviewModal(ratings?.ratings[0]?.review)
                          }
                        >
                          Read More
                        </button>
                      </div>
                    ) : (
                      ratings?.ratings[0]?.review
                    )}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Modal
          title={
            <div>
              <span className="font-bold">Give Review</span>
              <div
                style={{
                  borderBottom: "1px solid #e4e4e4",
                  paddingBottom: "10px",
                }}
              ></div>
            </div>
          }
          visible={isReviewModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          destroyOnClose={true}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          <ReviewPopup
            closeModal={handleOk}
            rating={rating}
            setRating={setRating}
            review={review}
            setReview={setReview}
          />
        </Modal>
        <Modal
          title={
            <div>
              <span className="font-bold">User's Review</span>
            </div>
          }
          visible={userReview}
          onOk={handleReviewOk}
          onCancel={handleReviewCancel}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          <UserReviewPopup review={selectedReview} />
        </Modal>
      </div>
    </Layout>
  );
};

export default Ratings;
