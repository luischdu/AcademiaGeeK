import { types } from "../types/types";

const initialState = {
    product: "",
    amount: 1,
    price: "",
    combo:{}
}

export const buyReducers = (state = initialState, action) => {
    switch (action.type) {

        case types.buySetProduct:
            
            return {
                ...state,
                product: action.payload,
            };

        case types.buySetAmount:
            
            return {
                ...state,
                amount: action.payload,
            };

        case types.buySetPrice:
            
            return {
                ...state,
                price: action.payload,
            };
        
        case types.buySetCombo:
        
        return {
            ...state,
            combo: action.payload,
        };

        default:
            return state;
    }
}
