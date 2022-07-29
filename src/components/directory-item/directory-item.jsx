import { useNavigate } from "react-router-dom";
import "./directory-item.scss";
const DirectoryItem = ({ category }) => {
    const {id,imageUrl,title,route} = category
    const navigate=useNavigate()
    const onNavigateHandler=()=>navigate(route)
    return (
        <div className="directory-item-container" key={id} onClick={onNavigateHandler}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></div>
            <div className="body">
                <h2>{title}</h2>
                <p>现在购买</p>
            </div>
        </div>
    );
};

export default DirectoryItem;
