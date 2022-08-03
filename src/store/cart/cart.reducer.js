
export const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],

};

export const cartReducer = (state=INITIAL_STATE, action={}) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_CART_ITEMS":
            return {
                ...state,
                cartItems:payload,
            };
        case "SetIsCartOpen":
            return {
                ...state,
                isCartOpen: payload,
            };
        default:
            return state;
    }
};
