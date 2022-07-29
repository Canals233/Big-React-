import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart";
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from "./navigation.style";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>

                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
