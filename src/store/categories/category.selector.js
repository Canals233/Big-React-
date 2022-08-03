import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;
export const reselectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategories = createSelector(
    [reselectCategories],
    (categories) =>
        {

            return categories.reduce((acc, category) => {
                const { title, items } = category;
                acc[title.toLowerCase()] = items;
                return acc;
            }, {})
        }
);
export const selectCategoriesIsLoading=createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)