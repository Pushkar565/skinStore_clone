import React from 'react';
import Navbar from './Navbar';
import DropdownMenu from './DropdownMenu';
import ImageCarousel from './ImageCarousel';
import ShopByBrand from './ShopByBrand';
import img from '../assets/earnPoint/1.avif';
import './Homepage.css';
import Footer from './_Footer';
import __Footer from './__Footer';
import { Link } from 'react-router-dom';


const homepage = () => { 
  return (
    <>
      <Navbar />
      <DropdownMenu />
      <ImageCarousel />
      <ShopByBrand />

      <Link to="/productPage">
    <div className='earn-point'>
        <picture className="earn-point-image">
          <img src={img} alt="Earn Points" />
        </picture>
      </div></Link>

      <Footer />
      <__Footer />
    </>
  );
}

export default homepage;
