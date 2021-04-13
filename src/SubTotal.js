import React from 'react'
import './subTotal.css';
import CurrencyFormat from "react-currency-format";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

function SubTotal() {
    return (
        <div className="subTotal">
            <CurrencyFormat
                renderText={(Value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className="subTotal_gift">
                            <input type="checkbox" /> This order
                            contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
