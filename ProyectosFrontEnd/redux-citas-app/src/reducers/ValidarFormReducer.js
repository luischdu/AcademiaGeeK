import { types } from "../types/types";

const initialState = {
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.validar:
      return {
        ...state,
        error: action.payLoad,
      };

    default:
      return state;
  }
}
