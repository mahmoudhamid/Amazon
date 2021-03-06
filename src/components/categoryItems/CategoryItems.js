import Product from '../product/Product'
import { useStateValue } from '../stateprovider/StateProvider';
import './CategoryItems.css'
function CategoryItems() {
    const [{ items }] = useStateValue();

    return (
        <div className="categoryItems">
            <div className="categoryItems_row">

                {
                    items.map(item => (
                        <Product key={Math.random()} item={item} />
                    ))
                }
            </div>
        </div>

    )
}

export default CategoryItems
