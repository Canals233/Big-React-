

import CheckoutItem from "../../components/checkout-item/checkout-item";

import "./checkout.scss";

import { useSelector } from "react-redux/es/exports";
import { selectCartItems, selectCartToal } from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {

    const cartItems=useSelector(selectCartItems)
    const cartTotal=useSelector(selectCartToal)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">TOTAL: ${cartTotal}</div>
            <PaymentForm/>
        </div>
    );
};

export default Checkout;
