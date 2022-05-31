import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import "./review.css";
import reviews from "./reviewData";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Review = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const reviewVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    // hidden: { opacity: 0, y: 1000 },
  };

  return (
    <div className='reviews'>
      <h2 style={{ fontWeight: 700, fontSize: "3rem" }}>Reviews</h2>
      <motion.div
        ref={ref}
        initial={{ y: 300, opacity: 0 }}
        animate={controls}
        variants={reviewVariants}
        className='review__container'
      >
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
      </motion.div>
    </div>
  );
};

export default Review;
