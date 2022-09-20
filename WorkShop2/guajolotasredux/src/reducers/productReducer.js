import { types } from '../types/types';

const initialState = {
    products: [],
    active: null
}


export const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.productAddNew:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }

        case types.productLoad:
            return {
                ...state,
                products: [
                    ...action.payload
                ]
            }

        case types.productDelete:
            return {
                ...state,
                products: state.products.filter(products => products.id !== action.payload)
            }

        case types.productActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.productUpdated:
            return {
                ...state,
                products: state.products.map(
                    products => products.id === action.payload.id
                        ? action.payload.products
                        :
                        products
                )
            }

        default:
            return state
    }


}