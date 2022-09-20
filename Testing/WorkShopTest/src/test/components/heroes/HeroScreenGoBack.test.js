import React from 'react'
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen'
import '../../../setupTests'
import { MemoryRouter, Route } from 'react-router-dom'

describe('Pruebas con el botón de volver atras', () => {

    test('Hacer push ', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route
                    path="/hero/:heroeId"
                    component={() => <HeroScreen history={history} />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    })

    test('Regresar a la pestaña anterior ', () => {
        const historyMock = {
            push: jest.fn(),
            goBack: jest.fn(),
            length: 10
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ historyMock } /> }
                />
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        
        expect( historyMock.push ).toHaveBeenCalledTimes(0);
        expect( historyMock.goBack ).toHaveBeenCalled();
    })

})