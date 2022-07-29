import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import { CategoriesContext } from "../../contexts/categories";

import "./category.scss";
const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    // 只有当数据源改变了才重新渲染

    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                            ></ProductCard>
                        );
                    })}
            </div>
        </Fragment>
    );
};

export default Category;
