import { mount } from 'enzyme'
import '@testing-library/jest-dom'
import React from 'react'
import { MemoryRouter } from 'react-router'
import { HeroScreen } from '../../../components/heroes/HeroScreen'
import { Route } from 'react-router-dom'

describe('Validacines en el componente <HeroScreen />', () => {

    const historyMock = {
        push: jest.fn(),
        goBack: jest.fn(),
        length: 10
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={historyMock} />
        </MemoryRouter>
    )

    test('Redirect si no hay URL', () => {
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })
    
    
    test('Funcionamiento correcto', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route path='/hero/:heroeId' component={HeroScreen} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot()
        
        const textContent = wrapper.find('h3').text().trim()

        expect(textContent).toBe('Hulk')
    })
    
})