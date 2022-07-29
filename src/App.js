import { Routes, Route} from "react-router-dom";
import Home from "./routers/home/home";
import Navigation from "./routers/navigation/navigation";
import Authentication from "./routers/authentication/authentication";
import Shop from "./routers/shop/shop";
import Checkout from "./routers/checkout/checkout";



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home></Home>}/>
                <Route path="shop/*" element={<Shop></Shop>} />
                <Route path="auth" element={<Authentication></Authentication>} />
                <Route path="checkout" element={<Checkout></Checkout>} />
            </Route>
        </Routes>
    );
};

export default App;
