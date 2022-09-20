import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import { heroes } from "../../data/heros";

describe("Validando filtro", () => {
  test("validar id ", () => {
    const id = 2;
    const heroeById = getHeroeById(id);
    const heroeData = heroes.find((heroe) => heroe.id === 3);

    expect(heroeById).toEqual(heroeData);
  });

  test("validar owner ", () => {
    const owner = "Marvel";
    const heroeByOwner = getHeroesByOwner(owner);
    const heroeData = heroes.filter((heroe) => heroe.owner === owner);
    expect(heroeByOwner).toEqual(heroeData);
  });
});
