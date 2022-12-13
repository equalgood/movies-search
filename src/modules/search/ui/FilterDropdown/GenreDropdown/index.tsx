import React, { FC } from "react";
import styles from "../../../pages/MoviesSearch/index.module.css";
import {
  DropdownFilterStates,
  SearchActionTypes,
} from "../../../../../types/search";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

const GenreDropdown: FC = () => {
  const dispatch = useDispatch();
  const { dropdownFilterState } = useTypedSelector(
    (state) => state.searchReducer
  );

  const changeHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    dispatch({
      type: SearchActionTypes.SELECT_GENRE,
      payload: e.target.defaultValue,
    });
  };

  return (
    <form
      onChange={changeHandler}
      className={
        dropdownFilterState !== DropdownFilterStates.genre ? styles.hidden : ""
      }
    >
      <div className={styles["dropdown__option"]}>
        <input type="checkbox" name="genre" value="any" id="genreChoiceAny" />
        <label htmlFor="genreChoiceAny">Any genre</label>
      </div>
      <div className={styles["dropdown__option"]}>
        <input
          type="checkbox"
          name="genre"
          value="Action"
          id="genreChoiceAction"
        />
        <label htmlFor="genreChoiceAction">Action</label>
      </div>
      <div className={styles["dropdown__option"]}>
        <input
          type="checkbox"
          name="genre"
          value="Comedy"
          id="genreChoiceComedy"
        />
        <label htmlFor="genreChoiceComedy">Comedy</label>
      </div>
      <div className={styles["dropdown__option"]}>
        <input
          type="checkbox"
          name="genre"
          value="Drama"
          id="genreChoiceDrama"
        />
        <label htmlFor="genreChoiceDrama">Drama</label>
      </div>
      <div className={styles["dropdown__option"]}>
        <input
          type="checkbox"
          name="genre"
          value="Thriller"
          id="genreChoiceThriller"
        />
        <label htmlFor="genreChoiceThriller">Thriller</label>
      </div>
    </form>
  );
};

export default GenreDropdown;
