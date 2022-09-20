import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import React from "react";
import { AuthContext } from "../../auth/AuthContext";
import "@testing-library/jest-dom";
import { DashboardRoutes } from "../../routers/DashboardRoutes";


describe('Validando el Dashboard', () => {
    test('Usuario  ', () => {
        const context = {
            dispatch: jest.fn(),
            user: {
              logged: true,
              name: 'Carlos'
            },
          };
      
          const wrapper = mount(
            <AuthContext.Provider value={context}>
              <MemoryRouter>
                <DashboardRoutes/>
              </MemoryRouter>
            </AuthContext.Provider>
          )
          expect(wrapper).toMatchSnapshot();
          expect(wrapper.find("span").text().trim()).toBe('Carlos')
    })
    
})
