import Button from "../button/button";
import "./product-card.scss";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);
    const AddPro = () => dispatch(addItemToCart(cartItems,product));
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={"inverted"} onClick={AddPro}>
                加入购物车
            </Button>
        </div>
    );
};
export default ProductCard;
