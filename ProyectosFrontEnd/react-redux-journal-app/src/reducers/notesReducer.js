import { types } from "../types/types";

const initialState = {
  notes: [],
  active: {},
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesAddNew:
      return {
        ...state,
        active: { ...action.payload },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    default:
      return state;
  }
};
