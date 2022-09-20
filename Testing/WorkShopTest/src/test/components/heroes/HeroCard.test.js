import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { HeroCard } from '../../../components/heroes/HeroCard'

describe('Pruebas componente <HeroCard />', () => {
    test('Validar informacion Alter-Ego', () => {
        const id = 'marvel-thor'
        const superhero = 'Thor'
        const alter_ego = 'Thor Odinson'
        const first_appearance = 'Journey into Myster #83'
        const characters = 'Thor Odinson'
        
        const wrapper = shallow(
            <HeroCard
                id = {id}
                superhero = {superhero}
                alter_ego = {alter_ego}
                first_appearance = {first_appearance}
                characters = {characters}
            />
        )

        expect(wrapper).toMatchSnapshot()

        const textParrafo = wrapper.find('p').first().text().trim()
    
        expect(textParrafo).toBe('Thor Odinson')
    })
})