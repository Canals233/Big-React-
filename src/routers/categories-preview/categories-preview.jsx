import {  Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import { selectCategories, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import {useSelector} from 'react-redux'
import Spinner from "../../components/spinner/spinner";


const CategoriesPreview = () => {
    const categoriesMap=useSelector(selectCategories)
    const isLoading=useSelector(selectCategoriesIsLoading)
    //通过keys方法得到所有键数组，map方法对每个数组进行渲染
    const Previews=Object.keys(categoriesMap).map((title) => {
        const products=categoriesMap[title]
        return (
            <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
        );
    })
    return (
        <Fragment>

                {isLoading?<Spinner/>:Previews}
            
        </Fragment>
    );
};

export default CategoriesPreview;
