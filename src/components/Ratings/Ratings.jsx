import React,{useState} from "react";
import { ratings_data } from "../../Data/RatingsData";
import { Modal } from "antd";
import ReviewPopup from "../../Utils/Modals/ReviewPopup/ReviewPopup";

const Ratings = () => {
 const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

   const showModal = () => {
     setIsReviewModalOpen(true);
   };
   const handleOk = () => {
     setIsReviewModalOpen(false);
   };
   const handleCancel = () => {
     setIsReviewModalOpen(false);
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
      <div className="flex justify-between flex-wrap mt-10 text-ratingsColor sm:mt-5 md:gap-3">
        {ratings_data.map((ratings, i) => {
          return (
            <div
              className="w-[32%] md:w-[40%] h-[364px] sm:w-[100%] shadow-navbar-button p-7 rounded-md flex flex-col cursor-pointer md:p-3"
              key={i}
            >
              <div className="flex justify-between items-center pb-3">
                <div>{ratings.ratings}</div>
                <div>
                  <img src={ratings.ratings_img} alt="rating" />
                </div>
              </div>
              <p className="font-bold pb-3 lg:text-sm">{ratings.title}</p>
              <p className="text-sm">{ratings.desc}</p>
              <div className="flex-grow"></div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={ratings.user_img} alt="users" className="w-8" />
                </div>
                <div>
                  <p className="text-xs font-bold">{ratings.user_name}</p>
                  <p className="text-xs">{ratings.user_profession}</p>
                </div>
              </div>
            </div>
          );
        })}
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
        <ReviewPopup />
      </Modal>
    </div>
  );
};

export default Ratings;
