import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider/StateProvider'
import './Product.css'

function Product({ item }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        let found = false;
        if (basket.length) {
            basket.map(basketItem => {
                if (basketItem.id === item.id) {
                    found = true;
                }
            })
            if (found) {
                dispatch({
                    type: "SET_NUM",
                    num: item.num + 1,
                    id: item.id
                })
            }
            else {
                dispatch({
                    type: "ADD_TO_BASKET",
                    item: item
                })
                dispatch({
                    type: "UPDATE_BASKET",
                    item: basket
                })
                dispatch({
                    type: "SET_NUM",
                    num: item.num + 1,
                    id: item.id
                })
            }
        }
        else {
            dispatch({
                type: "ADD_TO_BASKET",
                item: item
            })
            dispatch({
                type: "UPDATE_BASKET",
                item: basket
            })
            dispatch({
                type: "SET_NUM",
                num: item.num + 1,
                id: item.id
            })
        }
    }
    const setCurrentProduct = () => {
        dispatch({
            type: "SET_CURRENT_PRODUCT",
            item: {
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                rating: item.rating,
                num: item.num
            }
        })
    }

    return (
        <div onClick={setCurrentProduct} className="product">
            <div className="product_info">
                <Link to="/currentProduct">
                    <p className="product_name">{item.name}</p>
                </Link>
                <p className="product_price">
                    <small>$</small>
                    <strong>{item.price} </strong>
                </p>
                <div className="product_rating">
                    {Array(item.rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
            </div>
            <Link to="/currentProduct">
                <img src={item.image} />
            </Link>
            <button onClick={addToBasket}>Add To Basket</button>

        </div>
    )
}

export default Product
