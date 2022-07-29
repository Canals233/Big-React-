import { useContext, Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import { CategoriesContext } from "../../contexts/categories";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                //通过keys方法得到所有键数组，map方法对每个数组进行渲染
                Object.keys(categoriesMap).map((title) => {
                    const products=categoriesMap[title]
                    return (
                        <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
                    );
                })
            }
        </Fragment>
    );
};

export default CategoriesPreview;
