import { types } from "../types/types";

const initialState = {
    dbProducts: [],
    cart:[],
    modal:false
}

export const dbProductReducers = (state = initialState, action) => {
    switch (action.type) {

        case types.dbProductos:
            return {
                ...state,
                dbProducts: action.payload,
            };

        case types.dbCart:
            return {
                ...state,
                cart: action.payload,
            };
        
        case types.dbCartModal:
            return {
                ...state,
                modal: action.payload,
            };

        default:
            return state;
    }
}
