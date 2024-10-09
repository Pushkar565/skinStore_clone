import React from "react";
import "./ShopByBrand.css"; 
import img1 from "../assets/shopByBrand/1.avif";
import img2 from "../assets/shopByBrand/2.avif";
import img3 from "../assets/shopByBrand/3.avif";
import img4 from "../assets/shopByBrand/4.avif";
import img5 from "../assets/shopByBrand/5.avif";

const ShopByBrand = () => {
  return (
    <div className="container">
      <h1>Shop by Top Brands on Dermstore</h1>
      <div>
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
        <img src={img5} alt="img" />
      </div>
    </div>
  );
};

export default ShopByBrand;
