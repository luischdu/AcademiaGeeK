import { types } from "../types/types";

const ValidarAction = (estado) => {
  return {
    type: types.validar,
    payLoad: estado,
  };
};
export default ValidarAction;
