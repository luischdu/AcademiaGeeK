import { types } from "../types/types";

const initialState = {
  trailer: null,
};

export const movieTrailer = (state = initialState, action) => {
  switch (action.type) {
    case types.movieTrailer:
      return {
        ...state,
        trailer: action.payload,
      };

    default:
      return state;
  }
};
