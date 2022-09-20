import { types } from "../types/types";

const initialState = {
    allArticles: [],
    focusArticle: [],
};

export const load = (state = initialState, action) => {
    switch (action.type) {
        case types.articlesLoad:
            return {
                ...state,
                allArticles: action.payload,
            }
    
        case types.articlesRead:
            return {
                ...state,
                focusArticle: action.payload,
            }    

        default:
            return state;
    }
}
