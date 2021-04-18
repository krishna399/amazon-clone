import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./payment.css"
import { useStateValue } from './StateProvider'

function Payment() {

    const [state, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment_container">

                <div className="payment_header">
                    <h1> Checkout (
                        <Link to="/checkout">
                            {state.basket?.length} items
                        </Link>)
                    </h1>
                </div>
                {/* payment delivery section */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{state.user?.email}</p>
                        <p>street address</p>
                        <p>State, country</p>
                    </div>
                </div>
                {/* payment items section */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {state.basket.map((item) => (
                            <CheckoutProduct {...item} />
                        ))}
                    </div>
                </div>
                {/* payment section */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>
                            Payment Method
                        </h3>
                    </div>
                    <div className="payment_details">
                        {/* cc payment logic */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
