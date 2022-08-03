import { Fragment,  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import { selectCategories, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import {useSelector} from 'react-redux'

import "./category.scss";
import Spinner from "../../components/spinner/spinner";
const Category = () => {
    const { category } = useParams();
    const categoriesMap=useSelector(selectCategories)
    const isLoadig=useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    // 只有当数据源改变了才重新渲染
    const CategoryContainer=(<div className="category-container">
    {products &&
        products.map((product) => {
            return (
                <ProductCard
                    key={product.id}
                    product={product}
                ></ProductCard>
            );
        })}
</div>)

    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            {
                isLoadig?<Spinner/>:CategoryContainer
            }

        </Fragment>
    );
};

export default Category;
