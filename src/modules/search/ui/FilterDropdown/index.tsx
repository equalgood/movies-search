import React, { FC } from "react";
import styles from "../../pages/MoviesSearch/index.module.css";
import classNames from "classnames/bind";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { DropdownFilterStates } from "../../../../types/search";
import RatingDropdown from "./RatingDropdown";
import GenreDropdown from "./GenreDropdown";

const FilterDropdown: FC = () => {
  const { dropdownFilterState } = useTypedSelector(
    (state) => state.searchReducer
  );
  let selectedStyle = "";
  if (dropdownFilterState === DropdownFilterStates.genre)
    selectedStyle = "dropdown__genre";
  if (dropdownFilterState === DropdownFilterStates.rating)
    selectedStyle = "dropdown__rating";
  const bindStyles = classNames.bind(styles);
  const classes = bindStyles("primary-frame", "dropdown", selectedStyle);

  return (
    <React.Fragment>
      {dropdownFilterState !== DropdownFilterStates.closed ? (
        <div className={classes}>
          <RatingDropdown />
          <GenreDropdown />
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default FilterDropdown;
