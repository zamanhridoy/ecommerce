import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // ---------------------------------------------------------

    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

    // -------------------------------------------------------------

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        totalPrice = totalPrice + prd.price;
        
    }
    let shipping = 0;
    if (totalPrice > 100 || totalPrice <= 0) { 
        shipping = 0;
    }
    else if (totalPrice > 30) {
        shipping = 4.5;
    }
    else{
        shipping = 12.5;
    }

    const vat  = (totalPrice * .10).toFixed(2);
    const total = (totalPrice + shipping + Number(vat)).toFixed(2);
    return (
        <div className='cart' >
            
            <h1>Cart</h1>
            <h5> Item Ordered: {cart.length}</h5>
            <p>Items: {totalPrice}$</p>
            <p>Shipping: {shipping}$</p>
            <p>VAT 10%: {vat}$</p>
            <h4>Total price: {total}$</h4>

        </div>
    );
};

export default Cart;