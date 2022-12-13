import React, { FC } from "react";
import styles from "../../../pages/MoviesSearch/index.module.css";
import RatingBar from "../../../../../shared/ui/RatingBar";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import {
  DropdownFilterStates,
  SearchActionTypes,
} from "../../../../../types/search";
import { useDispatch } from "react-redux";
import RatingStarsOption from "./RatingStarsOption";

const RatingDropdown: FC = () => {
  const optionsAmount = new Array(10).fill(undefined);
  const { dropdownFilterState } = useTypedSelector(
    (state) => state.searchReducer
  );
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    dispatch({
      type: SearchActionTypes.SELECT_RATING,
      payload: +e.target.value,
    });
  };
  return (
    <form
      onChange={changeHandler}
      className={
        dropdownFilterState !== DropdownFilterStates.rating ? styles.hidden : ""
      }
    >
      <div className={styles["dropdown__option"]}>
        <input type="checkbox" name="rating" value="0" id="ratingChoiceAny" />
        <label htmlFor="ratingChoiceAny">Any rating</label>
      </div>
      {optionsAmount.map((el, i) => (
        <RatingStarsOption stars={i + 1} />
      ))}
    </form>
  );
};

export default RatingDropdown;
