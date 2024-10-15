import React, { useState } from 'react'; // Don't forget to import useState
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import './App.css';
import ProductPage from './components/productPage'; 
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.name !== product.name));
  };

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };

  const removeFromWishlist = (product) => {
    setWishlistItems(wishlistItems.filter(item => item.name !== product.name));
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Home route displays the Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Register page */}
          <Route path="/register" element={<Register />} />

          {/* Products page */}
          <Route 
            path="/productPage" 
            element={
              <ProductPage 
                addToCart={addToCart} 
                addToWishlist={addToWishlist}
              />
            } 
          />

          {/* Cart page */}
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart}
              />
            } 
          />

          {/* Wishlist page */}
          <Route 
            path="/wishlist" 
            element={
              <Wishlist 
                wishlistItems={wishlistItems} 
                removeFromWishlist={removeFromWishlist} 
                addToCart={addToCart}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
