import { shallow } from 'enzyme'
import React from 'react'
import {HeroCard} from '../../../components/heroes/HeroCard'
import '@testing-library/jest-dom'

describe('Pruebas componente <HeroCard>', () => {

    test('Validar la información ', () => {

       const id =  'dc-batman'
       const superhero ='Batman'
       const alter_ego='Bruce Wayne'
       const first_appearance='Detective Comics #27'
       const characters='Bruce Wayne'

       const wrapper = shallow(
           <HeroCard 
           id={id}
           superhero={superhero}
           alter_ego={alter_ego}
           first_appearance={first_appearance}
           characters={characters}
           />
       )

       const textParrafo = wrapper.find('h5').text().trim()

       expect(wrapper).toMatchSnapshot()
       expect(textParrafo).toBe('Batman')  
        
    })
    
})
