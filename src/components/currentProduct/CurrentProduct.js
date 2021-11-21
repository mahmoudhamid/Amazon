import React from 'react'
import { useStateValue } from '../stateprovider/StateProvider';
import './CurrentProduct.css'
function CurrentProduct() {
    const [{ currentProduct, basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        let found = false;
        if (basket.length) {
            basket.forEach(basketItem => {
                if (basketItem.id === currentProduct.id) {
                    found = true;
                }
            })
            if (found) {
                dispatch({
                    type: "SET_NUM",
                    num: currentProduct.num + 1,
                    id: currentProduct.id
                })
            }
            else {
                dispatch({
                    type: "ADD_TO_BASKET",
                    item: currentProduct
                })
                dispatch({
                    type: "UPDATE_BASKET",
                    item: basket
                })
                dispatch({
                    type: "SET_NUM",
                    num: currentProduct.num + 1,
                    id: currentProduct.id
                })
            }
        }
        else {
            dispatch({
                type: "ADD_TO_BASKET",
                item: currentProduct
            })
            dispatch({
                type: "UPDATE_BASKET",
                item: basket
            })
            dispatch({
                type: "SET_NUM",
                num: currentProduct.num + 1,
                id: currentProduct.id
            })
        }
    }


    return (
        <div className="currentProduct">
            <img className="currentProduct_image" src={currentProduct.image} alt="image" />
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
