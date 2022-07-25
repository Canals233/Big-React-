import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
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

export const CartContext = createContext({
    isCartOpen: false,
    SetIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
});
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    useEffect(()=>{
        const newcount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newcount)
    },[cartItems])
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount
    };
    useEffect(() => {}, []);
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
