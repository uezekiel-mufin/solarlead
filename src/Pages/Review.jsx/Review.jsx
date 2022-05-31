import { Avatar } from "@mui/material";
import React from "react";
import "./review.css";
import reviews from "./reviewData";

const Review = () => {
  return (
    <div className='reviews'>
      <h2 style={{ fontWeight: 700, fontSize: "3rem" }}>Reviews</h2>
      <div className='review__container'>
        {reviews.map((review, index) => (
          <div key={index} className='review'>
            <h5
              style={{ fontStyle: "italic", fontSize: "1rem", fontWeight: 400 }}
            >
              {review.testimony}
            </h5>
            <div className='review__bottom'>
              <Avatar src={review.icon} />
              <div className='review__job'>
                <h4 style={{ fontWeight: 700, fontSize: "1rem" }}>
                  {review.job}
                </h4>
                <h4 style={{ fontWeight: 400, fontSize: "1rem" }}>
                  {review.company}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
