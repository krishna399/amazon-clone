import React from 'react'
import './product.css'
import { BasketActions } from './reducer';
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    function addToBasket() {
        // dispatch the item into the state
        dispatch({
            type: BasketActions.ADD_TO_BASKET,
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    }
    return (
        <div className="product" key={id}>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {/* put stars here*/}
                    {Array(Math.floor(rating)).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
