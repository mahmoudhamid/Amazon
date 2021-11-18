import { Link } from 'react-router-dom';
import './Category.css';

function Category({ title, image }) {
    return (
        <div className="category">
            <strong> {title} </strong>
            <Link to="/categoryItems"><img className="category_image" src={image} /></Link>
            <Link to="/categoryItems">Shop now</Link>
        </div>
    )
}

export default Category
