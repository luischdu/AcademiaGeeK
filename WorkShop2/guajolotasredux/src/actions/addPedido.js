import { types } from "../types/types";

export const  setProduct = (product) => {
    return {
        type: types.buySetProduct,
        payload: product,
    };
};

export const  setAmount = (amount) => {
    return {
        type: types.buySetAmount,
        payload: amount,
    };
};

export const  setPrice = (price) => {
    return {
        type: types.buySetPrice,
        payload: price,
    };
};

export const  setCombo = (combo) => {
    return {
        type: types.buySetCombo,
        payload: combo,
    };
};

