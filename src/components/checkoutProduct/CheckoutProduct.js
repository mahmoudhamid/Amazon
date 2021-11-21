import React, { useState } from 'react';
import { useStateValue } from '../stateprovider/StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({ id, name, image, price, num, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const [input, setInput] = useState(num);

    const removeFromBasket = () => {
        dispatch({
            type: "SET_NUM",
            num: 0,
            id: id
        })
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })

    }
    const increment = () => {
        let x = input + 1;
        setInput(x);
        dispatch({
            type: "SET_NUM",
            num: x,
            id: id
        })
    }
    const decrement = () => {
        let x = input - 1;
        setInput(x);
        dispatch({
            type: "SET_NUM",
            num: x,
            id: id
        })
        if (x === 0) removeFromBasket();
    }
    const setChange = (e) => {
        let x = Number(e.target.value);
        setInput(x);
        dispatch({
            type: "SET_NUM",
            num: x,
            id: id
        })
        if (x === 0) removeFromBasket();
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt='' className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{name}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong> {price} </strong>
                </p>
                <div className="checkoutProduct_rating" >
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <div className="checkoutProduct_number">
                    <button onClick={decrement}>-</button>
                    <input onChange={setChange} type="number" value={input} />
                    <button onClick={increment}>+</button>
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
