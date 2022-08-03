
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
    const  cartItems  = useSelector(selectCartItems);
    const navigate=useNavigate();
    const goToCheckOutHandler=()=>{
        navigate('/checkout')
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button onClick={goToCheckOutHandler}>去结算</Button>
        </div>
    );
};

export default CartDropdown;
