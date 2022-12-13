import { Movie } from "./index";

export interface SearchState {
  isAutocompleteOpen: boolean;
  movies: Movie[];
  filteredMovies: Movie[] | [];
  dropdownFilterState:
    | DropdownFilterStates.closed
    | DropdownFilterStates.genre
    | DropdownFilterStates.rating;
  chosenRatings: number[];
  chosenGenres: string[];
  inputString: string;
}

export enum DropdownFilterStates {
  closed = "closed",
  rating = "rating",
  genre = "genre",
}

export enum SearchActionTypes {
  OPEN_AUTOCOMPLETE = "OPEN_AUTOCOMPLETE",
  CHANGE_INPUT = "CHANGE_INPUT",
  OPEN_FILTER_DROPDOWN = "OPEN_FILTER_DROPDOWN",
  CLOSE_FILTER_DROPDOWN = "CLOSE_FILTER_DROPDOWN",
  SELECT_GENRE = "SELECT_GENRE",
  SELECT_RATING = "SELECT_RATING",
}

interface OpenAutocompleteAction {
  type: SearchActionTypes.OPEN_AUTOCOMPLETE;
}

interface ChangeInputAction {
  type: SearchActionTypes.CHANGE_INPUT;
  payload: string;
}

interface SelectGenreAction {
  type: SearchActionTypes.SELECT_GENRE;
  payload: string;
}

interface SelectRatingAction {
  type: SearchActionTypes.SELECT_RATING;
  payload: number;
}

interface OpenFilterDropdownAction {
  type: SearchActionTypes.OPEN_FILTER_DROPDOWN;
  payload: DropdownFilterStates.rating | DropdownFilterStates.genre;
}

interface CloseFilterDropdownAction {
  type: SearchActionTypes.CLOSE_FILTER_DROPDOWN;
}

export type SearchAction =
  | OpenAutocompleteAction
  | ChangeInputAction
  | SelectGenreAction
  | SelectRatingAction
  | OpenFilterDropdownAction
  | CloseFilterDropdownAction;
