import { types } from "../types/types";

const initialState ={
  hmovie: [],
  popular: [],
  npopular: [],
  later:[],
  search : [],
  valueSearch: ""

}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.movieLoad:
      return {
        ...state,
        hmovie: action.payload.movielist,
      };
    case types.moviePopular:
      return {
        ...state,
        popular: action.payload.moviePopular,
      };
    case types.movieNotPopular:
      return {
        ...state,
        npopular: action.payload.movieNotPopular,
      };
    case types.movieLater:
      return {
        ...state,
        later: action.payload.later,
      };
    case types.movieDelete:
      return {
        ...state,
        later: action.payload.later,
      };


    case types.movieSearch:
      return {
        ...state,
        search: action.payload.search,
      };

    case types.movieValueSearch:
      return {
        valueSearch: action.payload.valueSearch,
      };


    default:
      return state;
  }
};
