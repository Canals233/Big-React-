export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action = {}
) => {
    const { type, payload } = action;

    switch (type) {
        case "FetchCategoriesStart":
            return { ...state, isLoading: true };
        case "FetchCategoriesSuccess":
            return {
                ...state,
                categories: payload,
                isLoading: false,
            };
        case "FetchCategoriesFailed":
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};
