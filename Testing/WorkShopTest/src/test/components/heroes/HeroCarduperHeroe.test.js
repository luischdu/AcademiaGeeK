import React from "react";
import { shallow } from "enzyme";
import { HeroCard } from "../../components/heroes/HeroCard";
import "@testing-library/jest-dom";

describe("Pruebas componente HeroCard", () => {
  test("Validar publisher", () => {
    const id = "dc-batman";
    const superhero = "Batman";
    const alter_ego = "Bruce Wayne";
    const first_appearance = "Detective Comics #27";
    const characters = "Bruce Wayne";

    const wrapper = shallow(
      <HeroCard
        id={id}
        superhero={superhero}
        alter_ego={alter_ego}
        first_appearance={first_appearance}
        characters={characters}
      />
    );
 
    const imgCard = wrapper.find("h5").text().trim()
    expect(wrapper).toMatchSnapshot();
    expect(imgCard).toBe(superhero);
  });
}); 
 