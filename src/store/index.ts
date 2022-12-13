import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "../modules/search/store/searchReducer";

const rootReducer = combineReducers({
  searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
