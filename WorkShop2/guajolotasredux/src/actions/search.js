import { types } from "../types/types";

export const search = (search) => {
  return {
    type: types.searchProducto,
    payload: {
      search,
    },
  };
};

export const keepSearch = (product) => {
  return (dispatch) => {
    dispatch(search(product));
  };
};
