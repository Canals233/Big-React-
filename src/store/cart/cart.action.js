import { createAction } from "../../utils/reducer/reducer";

export const SetIsCartOpen = (bool) => {
   return { type: "SetIsCartOpen", payload: bool };
};
export const SetCartItems=(newCartItems)=>{
    return {type:'SET_CART_ITEMS',payload: newCartItems}
}

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    //如果已经被添加进了
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );
    //如果已经被添加进了
    //如果为只剩一件
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== productToRemove.id
        );
    }
    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};


export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
   return createAction('SET_CART_ITEMS',newCartItems);
};

export const removeItemToCart = (cartItems,productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction('SET_CART_ITEMS',newCartItems);
};

export const clearItemFromCart = (cartItems,productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return createAction('SET_CART_ITEMS',newCartItems);
};

