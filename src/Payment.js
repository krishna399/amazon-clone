import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import axios from "./axios";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import "./payment.css";

function Payment() {

    const [state, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);
    const [processing, setProcessing] = useState("");
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    /* for payment stripe logic 
     * stripe requires amount to be in sub units
     * ie cents for dollars, paisa for rupees
    */
    const stripe = useStripe();
    const elements = useElements();

    /*
     * Before we send a payment request to stripe,
     * it requires a secret key 
    */
    const [stripeClientSecret, setstripeClientSecret] = useState(true);

    /*
     * So whenever the basket items changes,
     * we will be needing a new secret key to 
     * update stripe about the change in payment details.
    */
    useEffect(() => {
        const getStripeClientSecret = async () => {
            let response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(state.basket) * 100}`
            });
            setstripeClientSecret(response.data.clientSecret);
        };
        getStripeClientSecret();
    }, [state.basket])

    console.log("this is the secret key", stripeClientSecret);

    const processPayment = async (event) => {
        event.preventDefault();
        setProcessing(true);
        await stripe.confirmCardPayment(
            stripeClientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent === payment confirmation
            setSuccess(true);
            setError(null);
            setProcessing(false);

            /* 
             * we need to replacestate instead of push as we 
             * dont want user to press back to land on payment page
             * and end up in a loop
            */
            history.replace("/orders");
        }).catch(error => {
            console.log("some error has occured. More information below: ");
            console.log(error);
        });

        // const payLoad = await stripe
    };

    /*
     * Listen for change in card details
     * and display any errors as the user types in the card details
    */
    const updatePaymentDetails = (event) => {
        setDisable(event.empty);
        setError(event.error ? event.error.message : "");
    };

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
                        <form onSubmit={processPayment}>
                            <CardElement
                                onChange={updatePaymentDetails}
                            />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total : {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(state.basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={processing || disable ||
                                        success}>
                                    <span> {processing
                                        ? <p>Processing</p>
                                        : "Buy Now"
                                    }
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
