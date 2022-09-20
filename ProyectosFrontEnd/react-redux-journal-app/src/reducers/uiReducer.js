import { types } from "../types/types";

const initialState = {
  loading: false,
  msjError: null,
};

export const registro = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msjError: action.plaload,
      };

    case types.uiRemoveError:
      return {
        ...state,
        msjError: null,
      };
    case types.uiStarLogin:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLogin:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
