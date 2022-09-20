import { types } from "../types/types";

const initialState = {
  citas: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.agregar:
      return {
        ...state,
        cita: [...state.citas, action.payLoad],
      };

    case types.borrar:
      return {
        ...state,
        citas: state.citas.filter((cita) => cita.id !== action.payLoad),
      };

    default:
      return state;
  }
}
