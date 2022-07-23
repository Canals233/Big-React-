import CategoryItem from "../category-item/category-item";
import './directory.css'
const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    category={category}
                ></CategoryItem>
            ))}
        </div>
    );
};
export default Directory
