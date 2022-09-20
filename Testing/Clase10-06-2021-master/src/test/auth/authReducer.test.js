import React from 'react'
import { types } from '../../types/types'
import { authReducer } from '../../auth/authReducer'
import '@testing-library/jest-dom'

describe('Pruebas al componente <authReducer>', () => {

    // const state = {
//     name: 'Fernando',
//     logged: true
// }

    test('Retornar estado inicial ', () => {
        const state = authReducer({logged: false},{})
        expect(state).toEqual({logged: false})
    })

    test('Autenticar y mostrar componentes ', () => {
        const action = {
            type: types.login,
            payload:{
                name: 'Carlos',
                logged: true
            }
        }

        const state = authReducer({logged: true, name: 'Carlos'},{action})
        expect(state).toEqual({logged: true, name: 'Carlos'})

    })

    test('Cerrar sesión ', () => {

        const action = {
            type: types.logout
           
        }
        const state = authReducer({logged: false, name: ''},action)
        expect(state).toEqual({logged: false})
    })

})
