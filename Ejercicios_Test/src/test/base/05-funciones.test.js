import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Validando funciones", () => {
  test("usuario iguales ", () => {
    const user = getUser();
    expect(user).toEqual({
      uid: "ABC123",
      username: "El_Papi1502",
    });
  });

  test("validadno nombre ", () => {
    const nombre = "El_Papi1502";
    const usuarioActivo = getUsuarioActivo(nombre);
    expect(usuarioActivo).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
