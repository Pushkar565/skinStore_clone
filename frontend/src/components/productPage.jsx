import React from 'react';
import Navbar from './Navbar';
import './Navbar.css';
import productData from '../db-json.json';
import "./productPage.css";

const ProductPage = ({ addToCart, addToWishlist }) => {
  const renderProducts = (category) => {
    return productData[category].map((product, index) => (
      <div key={index} className="product-card">
        <img src={product.image_url} alt={product.name} className="product-image" />
        <h2>{product.name}</h2>
        <p>{product.box}</p>
        <p>Price: ${product.price}</p>
        <div className="product-actions">
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="add-to-wishlist" onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Navbar />
      <div className="products-container">
        <h1>Skinceuticals Products</h1>
        <div className="product-list">
          {renderProducts('skinceuticals')}
        </div>

        <h1>Christophe Robin Products</h1>
        <div className="product-list">
          {renderProducts('christophe_robin')}
        </div>

        <h1>Featured Products</h1>
        <div className="product-list">
          {renderProducts('featured_products')}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
