import React from "react";
import MoviesSearch from "../modules/search/pages/MoviesSearch";
import { store } from "../store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <MoviesSearch />
    </Provider>
  );
}

export default App;
