import React, { useState } from "react";
import { Rate } from "antd";

const ReviewPopup = () => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  // Review status mapping
  const reviewStatus = {
    1: "Very Bad",
    2: "Bad",
    3: "Medium",
    4: "Good",
    5: "Very Good",
  };

  // handle review submit
  const handleClick = (e) => {
    e.preventDefault();
    setDescription("");
    console.log(description, "this is description");
  };

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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          className="bg-primary text-grey px-5 py-1 rounded-md"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewPopup;
