import { Outlet } from "react-router-dom";
import { Fragment} from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";


import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from "./navigation.style";
import { useSelector,useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
    const dispatch=useDispatch()
    const currentUser=useSelector(selectCurrentUser)
    const isCartOpen  = useSelector(selectIsCartOpen);

    const signOutUser=()=>dispatch(signOutStart())

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
