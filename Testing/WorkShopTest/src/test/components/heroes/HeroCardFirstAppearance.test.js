import React from 'react'
import { shallow } from 'enzyme'
import { HeroCard } from '../../../components/heroes/HeroCard'
import '../../../setupTests'

describe('Pruebas con HeroCardFirstAppearance', () => {
    test('Validar primera aparición de heroe', () => {
        const id = 'dc-batman'
        const superhero = 'Batman'
        const publisher = 'DC Comics'
        const alter_ego = 'Bruce Wayne'
        const first_appearance = 'Detective Comics #27'
        const characters = 'Bruce Wayne'

        const wrapper = shallow(
            <HeroCard
                id={id}
                superhero={superhero}
                publisher={publisher}
                alter_ego={alter_ego}
                first_appearance={first_appearance}
                characters={characters} />
        )

        const textParrafo = wrapper.find('small').text().trim()
        expect(wrapper).toMatchSnapshot()
        expect(textParrafo).toBe("Detective Comics #27")
        expect(wrapper.exists('.text-muted')).toBe(true)
    })

})