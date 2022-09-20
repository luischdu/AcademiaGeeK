import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';


describe('Pruebas en SearchScreen', () => {

    test('Mostrar valor inicial', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero');
 
    })


    test('Debe coincidir el valor buscador y la solicitud', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=flash`]}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe(`flash`);
        expect( wrapper ).toMatchSnapshot();

    })
})