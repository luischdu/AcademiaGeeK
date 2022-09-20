import '@testing-library/jest-dom'
import {retornaArreglo} from '../../base/07-deses-arr'

describe('Validando array', () => {
    test('Array esperado ', () => {
        const array = retornaArreglo()
        expect(array).toEqual(['ABC', 123])
    })
    
})
