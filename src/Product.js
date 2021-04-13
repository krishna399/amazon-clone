import React from 'react'
import './product.css'

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
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
            <img src={image} />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
