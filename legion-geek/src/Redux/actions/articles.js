import { types } from "../types/types";

export const setAllArticle = (allArticles) => {
    return {
        type: types.articlesLoad,
        payload: allArticles,
    }
}

export const setFocusArticle = (article) => {
    return {
        type: types.articlesRead,
        payload: article,
    }
}