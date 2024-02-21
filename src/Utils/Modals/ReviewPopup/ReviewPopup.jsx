import React, { useState,useEffect } from "react";
import { Rate } from "antd";
import { useUserReviewMutation } from "../../../store/services/services";
import { toast } from "react-toastify";
import {useDispatch} from 'react-redux'
import { setSuccess } from "../../../store/slices/statusSlice";

const ReviewPopup = ({ closeModal }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [ratingAuthor, { isSuccess, isError, error, isLoading }] =
    useUserReviewMutation();
  const dispatch = useDispatch(); // Redux dispatch
  // Review status mapping
  const reviewStatus = {
    1: "Very Bad",
    2: "Bad",
    3: "Medium",
    4: "Good",
    5: "Very Good",
  };
  // get localstorage id
  const user_id = localStorage.getItem("userId");
  // handle review submit
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await ratingAuthor({ user_id, rating, review });
    console.log(res, "this is res of rating");
    // Dispatch action to set isSuccess in Redux store
    dispatch(setSuccess(true));
  };

  // handle toast message
  useEffect(() => {
    if (isSuccess) {
      toast.success("Review and Rating added Successful!");
      closeModal();
    } else if (isError) {
      console.log(error.data.message, "this is error");
      toast.error(error.data.message);
    }
  }, [isSuccess, isError]);
  // Reset values when reset prop changes
  useEffect(() => {
    if (isSuccess) {
      setRating(0);
      setReview("");
    }
  }, [isSuccess]);
  return (
    <div>
      <div className="flex h-full w-full justify-center items-center border-b border-border pb-5 mt-8 sm:mt-3">
        <div className="text-center w-full">
          <p className="text-5xl font-bold pb-4 sm:text-2xl sm:pb-1">
            {rating ? rating : "Give Review"}
          </p>
          <p className="text-lg font-semibold pb-2">{reviewStatus[rating]}</p>
          <div className="pb-4">
            <Rate
              value={rating}
              onChange={setRating}
              allowClear={false}
              className="text-3xl sm:text-2xl"
            />
          </div>
          <div>
            <textarea
              className="w-full border border-primary focus:outline-none outline-none focus:shadow-inner bg-inputBg py-1 rounded-[4px] px-2"
              cols="30"
              rows="5"
              type="text"
              id="message"
              maxLength="250"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          className="bg-primary text-grey px-5 py-1 rounded-md"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? "Submiting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default ReviewPopup;
