import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router";
import { Navbar } from "../../components/ui/Navbar";
import { AuthContext } from "../../auth/AuthContext";
import "@testing-library/jest-dom";
import { types } from "../../types/types";

describe("Validar Navbar", () => {
  const historyMock = {
    push: jest.fn(),
    replece: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const context = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Carlos",
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={context}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>
  );
  test("Validar contenido ", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("span").text().trim()).toBe("Carlos");
  });

  test("Verificar boton ", () => {
    wrapper.find("button").prop("onClick")(); //haciendo clic
    expect(context.dispatch).toHaveBeenCalled({
      type: types.logout,
    }); // verificando que el elemento history se haya dispachado
    expect(historyMock.replece).toHaveBeenCalledWith("/login");
  });
}); 
