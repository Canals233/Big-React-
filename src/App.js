import { Routes, Route} from "react-router-dom";
import Home from "./routers/home/home";
import Navigation from "./routers/navigation/navigation";
import SignIn from "./routers/sign-in/sign-in";

const Shop = () => {
    return <h1>I am Shop</h1>;
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home></Home>}/>
                <Route path="shop" element={<Shop></Shop>} />
                <Route path="sign-in" element={<SignIn></SignIn>} />
            </Route>
        </Routes>
    );
};

export default App;
