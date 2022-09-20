import { types } from "../types/types";
import { db } from "../firebase/config";
//main
export const movies = (movielist) => ({
  type: types.movieLoad,
  payload: {
    movielist,
  },
});

export const moviesPopular = (moviePopular) => ({
  type: types.moviePopular,
  payload: {
    moviePopular,
  },
});

export const movieList = (list) => {
  return (dispatch) => {
    dispatch(movies(list));
  };
};

export const movieListPopular = (list) => {
  return (dispatch) => {
    dispatch(moviesPopular(list));
  };
};
export const moviesNotPopular = (movieNotPopular) => ({
  type: types.movieNotPopular,
  payload: {
    movieNotPopular,
  },
});

export const movieListNotPopular = (list) => {
  return (dispatch) => {
    dispatch(moviesNotPopular(list));
  };
};

export const watchList = (later) => ({
  type: types.movieLater,
  payload: {
    later,
  },
});

export const watchListLater = (datos, name) => {
  return async (dispatch, getSate) => {
    await dispatch(watchList(datos));
    let add = getSate().movie.later[0];
    db.collection(`users/${name.split(" ").join("")}/watchLater`).add(add);
  };
};

export const search = (search) => ({
  type: types.movieSearch,
  payload: {
    search,
  },
});

export const movieSearch = (search) => {
  return (dispatch) => {
    dispatch(search(search));
  };
};

export const valSearch = (valueSearch)=>({
  type: types.movieValueSearch,
  payload:{
    valueSearch
  }
})

export const movieSearchString = (valueSearch) => {
  return (dispatch) => {
    dispatch(movieSearchString(valueSearch));
  };
};