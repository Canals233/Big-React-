import { Routes, Route } from "react-router-dom";
// import Home from "./routers/home/home";



import { Fragment, lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner";

const Navigation = lazy(() => import("./routers/navigation/navigation"));
const Shop = lazy(() => import("./routers/shop/shop"));
const Checkout = lazy(() => import("./routers/checkout/checkout"));

const Home = lazy(() => import("./routers/home/home"));

const Authentication = lazy(() =>
    import("./routers/authentication/authentication")
);

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <Fragment>

            <Suspense fallback={<Spinner></Spinner>}>
                <Routes>
                    <Route path="/" element={<Navigation />}>
                        <Route index element={<Home></Home>} />
                        <Route path="shop/*" element={<Shop></Shop>} />
                        <Route
                            path="auth"
                            element={<Authentication></Authentication>}
                        />
                        <Route
                            path="checkout"
                            element={<Checkout></Checkout>}
                        />
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
};

export default App;
