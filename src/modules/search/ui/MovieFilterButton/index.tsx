import React, { FC } from "react";
import {
  DropdownFilterStates,
  SearchActionTypes,
} from "../../../../types/search";
import classNames from "classnames";
import styles from "../../pages/MoviesSearch/index.module.css";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import FilterButton from "../../../../shared/ui/buttons/FilterButton";

interface FilterButtonProps {
  label: string;
  filter: DropdownFilterStates;
}

const MovieFilterButton: FC<FilterButtonProps> = ({ filter, label }) => {
  const dispatch = useDispatch();
  const classes: string = classNames(styles["primary-frame"], styles.filter);
  const { dropdownFilterState } = useTypedSelector(
    (state) => state.searchReducer
  );

  const clickHandler = (e: React.MouseEvent) => {
    if (dropdownFilterState !== filter)
      dispatch({
        type: SearchActionTypes.OPEN_FILTER_DROPDOWN,
        payload: filter,
      });
    if (dropdownFilterState === filter)
      dispatch({
        type: SearchActionTypes.CLOSE_FILTER_DROPDOWN,
      });
  };

  return (
    <FilterButton
      label={label}
      classes={classes}
      onClick={clickHandler}
      isOpen={dropdownFilterState === filter}
    />
  );
};

export default MovieFilterButton;
