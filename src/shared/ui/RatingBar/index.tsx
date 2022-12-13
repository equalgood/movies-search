import React, { FC, memo } from "react";
import { StarIcon } from "../../assets/icons/stars";
import styles from "./index.module.css";

interface RatingBarProps {
  rating: number;
}

const starsCounter = new Array(10).fill(0);
const RatingBar: FC<RatingBarProps> = memo(
  ({ rating }) => {
    const semiIndex = Math.floor(rating);

    return (
      <div className={styles.bar}>
        {starsCounter.map((_, i) => {
          if (i < semiIndex) return <StarIcon fillTo={1} key={i} />;
          if (i > semiIndex) return <StarIcon fillTo={0} key={i} />;
          return <StarIcon fillTo={rating - semiIndex} key={i} />;
        })}
      </div>
    );
  },
  (prev, next) => Math.floor(prev.rating) === Math.floor(next.rating)
);

export default RatingBar;
