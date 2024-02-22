import React from "react";

const UserReviewPopup = ({ review }) => {
  return (
    <div className="rounded-lg p-4">
      <p>{review}</p>
    </div>
  );
};

export default UserReviewPopup;
