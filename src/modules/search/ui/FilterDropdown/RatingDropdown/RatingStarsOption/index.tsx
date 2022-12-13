import React, { FC } from "react";
import styles from "../../../../pages/MoviesSearch/index.module.css";
import RatingBar from "../../../../../../shared/ui/RatingBar";

interface RatingStarsOptionProps {
  stars: number;
}

const RatingStarsOption: FC<RatingStarsOptionProps> = ({ stars }) => {
  return (
    <div key={`ratingChoice${stars}`} className={styles["dropdown__option"]}>
      <input
        type="checkbox"
        name="rating"
        value={stars}
        id={`ratingChoice${stars}`}
      />
      <label htmlFor={`ratingChoice${stars}`}>
        <RatingBar rating={stars} />
      </label>
    </div>
  );
};

export default RatingStarsOption;
