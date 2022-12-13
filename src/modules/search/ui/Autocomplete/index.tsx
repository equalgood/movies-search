import React, { FC } from "react";
import styles from "../../pages/MoviesSearch/index.module.css";
import classNames from "classnames";
import SingleMovie from "./SingleMovie";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const Autocomplete: FC = () => {
  const { isAutocompleteOpen, filteredMovies } = useTypedSelector(
    (state) => state.searchReducer
  );
  const classes = classNames(styles["primary-frame"], styles.autocomplete);
  return (
    <React.Fragment>
      {isAutocompleteOpen ? (
        <ul className={classes}>
          {filteredMovies.map((movie) => (
            <SingleMovie key={movie.title} movie={movie} />
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};

export default Autocomplete;
