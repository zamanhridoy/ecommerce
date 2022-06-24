import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (

        <div className='product'>
            <div>
                <img className='product-img' src={img} alt="" />
            </div>
            <div>
            <h3 className='product-name'>{name}</h3>
            <br />
            <p><small>by: {seller}</small></p>
            <h3>Price: {price}$</h3>
            <p><small>Only <strong>{stock} </strong>left in stock </small></p>
            <button className='btn-cart' 
            onClick={
                () => props.addCart(props.product)
            }>
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart </button>

            </div>
           
        </div>
    );
};

export default Product;