import { types } from "../types/types";

export const searchReducer = (state = { search: [] }, action) => {
  switch (action.type) {
    case types.searchProducto:
      return {
          ...state,
        search: action.payload.search,
      };

    default:
      return state;
  }
};
