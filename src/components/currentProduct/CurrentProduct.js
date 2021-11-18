import React from 'react'
import { useStateValue } from '../stateprovider/StateProvider';
import './CurrentProduct.css'
function CurrentProduct() {
    const [{ currentProduct, basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: currentProduct.id,
                title: currentProduct.title,
                price: currentProduct.price,
                image: currentProduct.image,
                rating: currentProduct.rating
            }
        })
        dispatch({
            type: "UPDATE_BASKET",
            item: basket
        })
    }

    return (
        <div className="currentProduct">
            <img className="currentProduct_image" src={currentProduct.image} />
            <div className="currentProduct_info">
                <h3 className="currentProduct_title">
                    {currentProduct.title}
                </h3>
                <div className="currentProduct_price">$ {currentProduct.price} </div>
                <div className="currentProduct_rating">
                    {Array(currentProduct.rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={addToBasket}>Add To Basket</button>
            </div>
        </div>
    )
}

export default CurrentProduct
