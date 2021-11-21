import React from 'react';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../stateprovider/StateProvider';
import Subtotal from '../subtotal/Subtotal';
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {(!basket.length) && (<h1>Your Basket Is Empty</h1>)}
                    {basket.map(item => (
                        <CheckoutProduct key={Math.random()} id={item.id} name={item.name} image={item.image} num={item.num} price={item.price} rating={item.rating} />
                    ))}

                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
