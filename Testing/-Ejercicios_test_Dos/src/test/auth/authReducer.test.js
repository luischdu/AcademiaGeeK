import React from "react";
import "@testing-library/jest-dom";
import { types } from "../../types/types";
import { authReducer } from "../../auth/authReducer";

describe("Pruebas al componente <authReducer/>", () => {
  // const state = {
  //     name: 'Fernando',
  //     logged: true
  // }

  test("Retornar estado inicial ", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Autenticación de usuario ", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Fernando",
        logged: true,
      },
      
    };
    const state = authReducer({ logged: true }, action);
    expect(state).toEqual({ logged: true });
  });

  test("Cerrar sesión ", () => {});
});
