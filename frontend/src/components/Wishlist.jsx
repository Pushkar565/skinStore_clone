import React from 'react';
import Navbar from './Navbar';

const Wishlist = ({ wishlistItems, removeFromWishlist, addToCart }) => {
  return (
    <>
    <Navbar />
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-list">
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.image_url} alt={item.name} className="wishlist-image" />
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button onClick={() => removeFromWishlist(item)}>Remove from Wishlist</button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Wishlist;
