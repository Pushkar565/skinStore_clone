import React from 'react';
import Navbar from './Navbar';
import DropdownMenu from './DropdownMenu';
import ImageCarousel from './ImageCarousel';
import ShopByBrand from './ShopByBrand';
import img from '../assets/earnPoint/1.avif';
import './homepage.css';
import Footer from './_Footer';
import __Footer from './__Footer';


const Homepage = () => { 
  return (
    <>
      <Navbar />
      <DropdownMenu />
      <ImageCarousel />
      <ShopByBrand />

      <div className='earn-point'>
        <picture className="earn-point-image">
          <img src={img} alt="Earn Points" />
        </picture>
      </div>

      <Footer />
      <__Footer />
    </>
  );
}

export default Homepage;
