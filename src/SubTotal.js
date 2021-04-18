import React from 'react'
import './subTotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function SubTotal(value) {
    const history = useHistory();
    const [state, dispatch] = useStateValue();

    const goToPaymentPage = () => {
        if (state.basket.length) {
            history.push("/payment");
        }
    }

    return (
        <div className="subTotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({state.basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subTotal_gift">
                            <input type="checkbox" /> This order
                            contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(state.basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={goToPaymentPage}>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
