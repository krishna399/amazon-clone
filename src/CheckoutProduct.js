import React from 'react'
import './checkoutProduct.css'
import { BasketActions } from './reducer';
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating, showButton = true }) {

    const [state, dispatch] = useStateValue();
    function removeFromBasket() {
        // dispatch the remove item into the state
        dispatch({
            type: BasketActions.REMOVE_FROM_BASKET,
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}
                alt={title} />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {/* put stars here*/}
                    {Array(Math.floor(rating)).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
                {showButton &&
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                }

            </div>
        </div>
    )
}

export default CheckoutProduct
