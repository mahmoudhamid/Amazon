import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { getBasketTotal } from '../reducer/reducer';
import { useStateValue } from '../stateprovider/StateProvider';
import './Payment.css'

function Payment() {
    const [{ basket }, dispatch] = useStateValue();
    const totalCost = () => {
        let cost = 0;
        basket.forEach(item => {
            cost += item.price * item.num;
        })
        return cost.toFixed(2);
    }
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>email</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                num={item.num}
                            />
                        ))}
                    </div>
                </div>


                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go */}

                        <form>
                            <div className='payment__priceContainer'>
                                <h3>Order Total: $ {totalCost()}</h3>
                                <Link to="/home">
                                    <button>
                                        <span>Order now</span>
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
