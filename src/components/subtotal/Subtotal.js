import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../stateprovider/StateProvider';
import { getBasketTotal } from '../reducer/reducer';
import { Link } from 'react-router-dom'


const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const totalCost = () => {
        let cost = 0;
        basket.forEach(item => {
            cost += item.price * item.num;
        })
        return cost.toFixed(2);
    }
    const totalLength = () => {
        let total = 0;
        basket.forEach(item => {
            total += item.num;
        })
        return total;
    }

    return (
        <div className="subtotal">
            <>
                <p>
                    Subtotal {totalLength()} items: <strong>{totalCost()}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
            <Link to="/payment">
                Proceed the checkout
            </Link>
        </div>
    )
}

export default Subtotal
