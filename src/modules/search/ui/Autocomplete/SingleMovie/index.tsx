import React, { FC } from "react";
import { Movie } from "../../../../../types";
import styles from "../../../pages/MoviesSearch/index.module.css";
import RatingBar from "../../../../../shared/ui/RatingBar";

interface SingleMovieProps {
  movie: Movie;
}

const SingleMovie: FC<SingleMovieProps> = ({ movie }) => {
  const { title, rating, category } = movie;

  return (
    <li className={styles["single-movie"]}>
      <div>
        <p>{title}</p>
        <RatingBar rating={rating} />
      </div>
      <p className={styles["single-movie__category"]}>{category}</p>
    </li>
  );
};

export default SingleMovie;
