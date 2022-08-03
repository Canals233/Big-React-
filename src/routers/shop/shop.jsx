import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux/es/exports";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/catrgory";
import "./shop.scss";
import { FetchCategoriesStart} from "../../store/categories/category.action";

const Shop = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(FetchCategoriesStart())
    },[dispatch])

    return (

            <Routes>
                <Route index element={<CategoriesPreview />}></Route>
                <Route path=":category" element={<Category></Category>}></Route>
            </Routes>

    );
};

export default Shop;
