import React, { FC } from "react";
import styles from "./index.module.css";
import InputMovieName from "../../ui/InputMovieName";
import Autocomplete from "../../ui/Autocomplete";
import FilterDropdown from "../../ui/FilterDropdown";
import { DropdownFilterStates } from "../../../../types/search";
import MovieFilterButton from "../../ui/MovieFilterButton";

const MoviesSearch: FC = () => {
  return (
    <div className={styles["movies-search__layout"]}>
      <InputMovieName />
      <MovieFilterButton filter={DropdownFilterStates.rating} label="Rating" />
      <MovieFilterButton filter={DropdownFilterStates.genre} label="Genre" />
      <Autocomplete />
      <FilterDropdown />
    </div>
  );
};

export default MoviesSearch;
