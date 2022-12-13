import {
  DropdownFilterStates,
  SearchAction,
  SearchActionTypes,
  SearchState,
} from "../../../types/search";
import { Movie } from "../../../types";

const initialState: SearchState = {
  isAutocompleteOpen: false,
  movies: [
    { title: "The Matrix", rating: 7.5, category: "Action" },
    { title: "Focus", rating: 6.9, category: "Comedy" },
    { title: "The Lazarus Effect", rating: 6.4, category: "Thriller" },
    { title: "Everly", rating: 5.0, category: "Action" },
    { title: "Maps to the Stars", rating: 7.5, category: "Drama" },
  ],
  filteredMovies: [
    { title: "The Matrix", rating: 7.5, category: "Action" },
    { title: "Focus", rating: 6.9, category: "Comedy" },
    { title: "The Lazarus Effect", rating: 6.4, category: "Thriller" },
    { title: "Everly", rating: 5.0, category: "Action" },
    { title: "Maps to the Stars", rating: 7.5, category: "Drama" },
  ],
  dropdownFilterState: DropdownFilterStates.closed,
  chosenRatings: [],
  chosenGenres: [],
  inputString: "",
};

const filterMovies = (
  movies: Movie[],
  ratings: number[],
  genres: string[],
  input: string
) => {
  let filteredMovies: Movie[] | [] = movies.filter((movie) => {
    if (input.length !== 0 && !movie.title.includes(input)) return false;
    //0 stands for any rating
    console.log(genres);
    if (
      !ratings.includes(0) &&
      ratings.length > 0 &&
      !ratings.includes(Math.round(movie.rating))
    )
      return false;
    if (
      !genres.includes("any") &&
      genres.length > 0 &&
      !genres.includes(movie.category)
    )
      return false;
    return true;
  });

  return filteredMovies;
};

export const searchReducer = (
  state = initialState,
  action: SearchAction
): SearchState => {
  let filteredMovies: Movie[] | [] = [];
  switch (action.type) {
    case SearchActionTypes.OPEN_AUTOCOMPLETE:
      return { ...state, isAutocompleteOpen: true };
    case SearchActionTypes.OPEN_FILTER_DROPDOWN:
      return { ...state, dropdownFilterState: action.payload };
    case SearchActionTypes.CLOSE_FILTER_DROPDOWN:
      return { ...state, dropdownFilterState: DropdownFilterStates.closed };
    case SearchActionTypes.SELECT_GENRE:
      let newGenres: string[] = [...state.chosenGenres];
      if (!newGenres.includes(action.payload)) newGenres.push(action.payload);
      else newGenres = newGenres.filter((genre) => genre !== action.payload);

      filteredMovies = filterMovies(
        state.movies,
        state.chosenRatings,
        newGenres,
        state.inputString
      );
      return {
        ...state,
        filteredMovies,
        chosenGenres: [...newGenres],
        isAutocompleteOpen: true,
      };
    case SearchActionTypes.SELECT_RATING:
      let newRatings: number[] = [...state.chosenRatings];
      if (!newRatings.includes(action.payload)) newRatings.push(action.payload);
      else
        newRatings = newRatings.filter((rating) => rating !== action.payload);
      filteredMovies = filterMovies(
        state.movies,
        [...newRatings],
        state.chosenGenres,
        state.inputString
      );
      return {
        ...state,
        filteredMovies,
        chosenRatings: [...newRatings],
        isAutocompleteOpen: true,
      };
    case SearchActionTypes.CHANGE_INPUT: {
      filteredMovies = filterMovies(
        state.movies,
        state.chosenRatings,
        state.chosenGenres,
        action.payload
      );
      return {
        ...state,
        filteredMovies,
        inputString: action.payload,
        isAutocompleteOpen: true,
      };
    }
    default:
      return state;
  }
};
