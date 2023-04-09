import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some product</p>
    }


    return (
        <div>
            <h3>Order Summary:{cart.length}</h3>
            {cart.length > 2 ? <span className='purple'>aro kino</span> : 'fokira'}
           <p className={`bold bordered ${cart.length>3?'yellow':'blue'}`}>Something</p>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button></p>)
            }
            {
                cart.length===2 && <p>double double boltu</p>
            }
            {
                cart.length>=3 || <h2>3 ta to hoilo na</h2>
            }

        </div>
    );
};

export default Cart;