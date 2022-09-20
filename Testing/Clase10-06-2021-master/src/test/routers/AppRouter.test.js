import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AppRouter } from "../../routers/AppRouter";
import React from "react";
import { AuthContext } from "../../auth/AuthContext";
import "@testing-library/jest-dom";

describe("Validar componente <AppRouter/>", () => {
  test("Mostrar información usuario autenticado ", () => {
    const context = {
      dispatch: jest.fn(),
      user: {
        logged: true,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
  test("Mostrar información usuario no autenticado ", () => {
    const context = {
      dispatch: jest.fn(),
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter>
          <AppRouter component={() => <p>Componentes</p>} />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").exists()).toBe(true);
    const h1text = wrapper.find("h1").text().trim();
    expect(h1text).toBe('Login') 
  });
}); 
