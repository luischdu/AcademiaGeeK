import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heros";

describe("Ejecutando una promesa", () => {
  test("Validando petición ", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes.find((heroe) => heroe.id === id));
      done(); 
    });
  });

  test('validar heroe no existente ', (done) => {
      const mensaje = 'No se pudo encontrar el héroe'
      const id = 10 
      getHeroeByIdAsync(id).catch((heroe) => {
        expect(heroe).toBe(mensaje);
        done(); 
      });
  })
  
});
