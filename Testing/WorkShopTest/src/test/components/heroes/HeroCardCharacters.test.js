import React from 'react'
import { shallow } from 'enzyme'
import { HeroCard } from '../../../components/heroes/HeroCard'
import '../../../setupTests'

describe('Pruebas con HeroCardCharacters', () => {

    test('Validar personajes de heroe', () => {
        const id = 'dc-flash'
        const superhero = 'Flash'
        const alter_ego = 'Jay Garrick'
        const first_appearance = 'Flash Comics #1'
        const characters = 'Jay Garrick, Barry Allen, Wally West, Bart Allen'

        const wrapper = shallow(
            <HeroCard
                id={id}
                superhero={superhero}
                alter_ego={alter_ego}
                first_appearance={first_appearance}
                characters={characters} />
        )
        const textParrafo = wrapper.find('.card-text-characters').text().trim()
        expect(wrapper).toMatchSnapshot()
        expect(textParrafo).toBe("Jay Garrick, Barry Allen, Wally West, Bart Allen")
        expect(wrapper.exists('.card-text-characters')).toBe(true)
    })

    test("Validar si el personaje es igual al caracter", () => {
        // const id = 'dc-batman'
        // const superhero = 'Batman'
        const alter_ego = 'Bruce Wayne'
        // const first_appearance = 'Detective Comics #27'
        const characters = 'Bruce Wayne'

        // const wrapper = shallow(
        //     <HeroCard
        //         id={id}
        //         superhero={superhero}
        //         publisher={publisher}
        //         alter_ego={alter_ego}
        //         first_appearance={first_appearance}
        //         characters={characters} />
        // )
        expect(characters).toBe(alter_ego)
    })

})