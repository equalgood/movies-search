import React, { FC } from "react";
import styles from "../../pages/MoviesSearch/index.module.css";
import { useDispatch } from "react-redux";
import { SearchActionTypes } from "../../../../types/search";

const InputMovieName: FC = () => {
  const dispatch = useDispatch();
  const clickHandler = (e: React.MouseEvent) => {
    dispatch({ type: SearchActionTypes.OPEN_AUTOCOMPLETE });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SearchActionTypes.CHANGE_INPUT, payload: e.target.value });
  };

  return (
    <input
      onChange={changeHandler}
      onClick={clickHandler}
      className={`primary-frame ${styles.input}`}
      placeholder="Enter movie name"
      type="text"
    />
  );
};

export default InputMovieName;
