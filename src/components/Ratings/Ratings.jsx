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

const Ratings = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const { data, refetch, isLoading, isError, error } = useGetReviewsApiQuery();
  console.log(data?.data, "this is data");
  const isSuccess = useSelector((state) => state.success.isSuccess);

  const showModal = () => {
    setIsReviewModalOpen(true);
  };
  const handleOk = () => {
    setIsReviewModalOpen(false);
  };
  const handleCancel = () => {
    setIsReviewModalOpen(false);
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
    <div className="px-40 xl:px-8 xs:px-4">
      <div className="flex justify-between mt-12 items-center sm:mt-1 sm:flex-col">
        <h1 className="text-[44px] font-bold lg:text-2xl sm:text-lg sm:text-center sm:mt-5">
          See why our customers choose DocHub
        </h1>
        <button
          className="bg-primary text-grey px-5 py-1 rounded-md sm:mt-2"
          onClick={showModal}
        >
          Give Review
        </button>
      </div>
      <div className="w-full m-auto p-2">
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
              <div className="px-6 mb-4 py-3 mt-4 bg-primary rounded-md w-500 h-40">
                <div className="flex justify-between items-center pb-2">
                  <Rate value={ratings?.ratings[0]?.rating} disabled />
                </div>
                <p className="font-bold pb-2 lg:text-sm overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                  {ratings?.ratings[0]?.review}
                </p>
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        title={
          <div>
            <span>Give Review</span>
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
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <ReviewPopup closeModal={handleOk} />
      </Modal>
    </div>
  );
};

export default Ratings;
