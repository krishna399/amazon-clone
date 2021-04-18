import React from 'react'
import './checkout.css'
import SubTotal from './SubTotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [state, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout advertisement" />
                <div>
                    <h3 className="checkout_userName">
                        Hello {state.user
                            ? state.user.email
                            : "Guest"}
                    </h3>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {state.basket.map((item, idx) => (
                        <CheckoutProduct {...item} key={"checkoutProduct_" + idx} />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
