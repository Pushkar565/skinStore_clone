import React from 'react';
import Navbar from './Navbar';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <>

    <Navbar />
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image_url} alt={item.name} className="cart-image" />
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;
