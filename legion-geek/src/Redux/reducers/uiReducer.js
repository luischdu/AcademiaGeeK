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
        msjError: action.payload,
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
    case types.uiStopLogin:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
