
import { createAction } from "../../utils/reducer/reducer";

export const setCategories = (categories) => {
    return { type: "SetCategories", payload: categories };
};

export const FetchCategoriesStart = (categories) => {
    return createAction("FetchCategoriesStart", categories);
};
export const FetchCategoriesSuccess = (categories) => {
    return createAction("FetchCategoriesSuccess", categories);
};
export const FetchCategoriesFailed = (categories) => {
    return createAction("FetchCategoriesFailed", categories);
};
