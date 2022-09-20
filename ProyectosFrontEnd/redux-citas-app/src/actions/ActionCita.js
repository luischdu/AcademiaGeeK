import { types } from "../types/types";

export  const ActionCita = (cita) => {
    return {
        type: types.agregar,
        payLoad: cita
    }
}

export  const BorrarActionCita = (id) => {
    return {
        type:types.borrar,
        payLoad: id
    }
}