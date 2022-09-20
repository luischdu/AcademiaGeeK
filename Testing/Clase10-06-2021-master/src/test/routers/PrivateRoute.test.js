import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { PrivateRoute } from '../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router'
import '../../setupTests'


describe('Pruebas componente <PrivateRouter>', () => {


    Storage.prototype.setItem = jest.fn()

    const props = {
        location:{
            pathname: '/marvel'
        }
    }

    test('mostrar componentes si el user esta autenticado ', () => {

        const wrapper = mount(
            
            <MemoryRouter>
                <PrivateRoute 
                isAuthenticated={true}
                component={()=><p>Componentes</p>}
                {...props}
                />
            </MemoryRouter>
        )
        console.log(wrapper.html())
        expect(wrapper.find('p').exists()).toBe(true)
    })

    test('usuario no autenticado ', () => {
        
        
        const wrapper = mount(
            
            <MemoryRouter>
                <PrivateRoute 
                isAuthenticated={false}
                component={()=><p>Componentes</p>}
                {...props}
                />
            </MemoryRouter>
        )
        console.log('======='+wrapper.html()+'==========')
        expect(wrapper.find('p').exists()).toBe(false)
        expect(localStorage.setItem).toHaveBeenCalledWith( "lastPath", "/marvel")

    })
    
     
})
