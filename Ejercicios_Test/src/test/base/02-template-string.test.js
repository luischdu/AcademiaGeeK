import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Ejercicio 2 Validar", () => {
  test("string deber ser igual ", () => {
    const nombre = "Luis";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola "+nombre);
  })

});
