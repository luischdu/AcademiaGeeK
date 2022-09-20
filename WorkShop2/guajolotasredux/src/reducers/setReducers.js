import { types } from "../types/types";

const initialState = {
  singleProduct: [],

};

export const setSingleProduct = (state = initialState, action) => {
  switch (action.type) {
    case types.setProductView:
      return {
        ...state,
        singleProduct: action.payload,
      };

    default:
      return state;
  }
};
