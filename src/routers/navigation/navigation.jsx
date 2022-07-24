import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.scss";
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
    const { currentUser} = useContext(UserContext);
    // console.log(currentUser);
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        商店
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>登出</span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            登录/注册
                        </Link>
                    )}
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Navigation;
