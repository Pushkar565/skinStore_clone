import React from 'react';
import Navbar from './Navbar';
import DropdownMenu from './DropdownMenu';
import ImageCarousel from './ImageCarousel';
import ShopByBrand from './ShopByBrand';

const Homepage = () => { 
  return (
  <>
    <Navbar/>
    <DropdownMenu/>
    <ImageCarousel/>
    <ShopByBrand/>

    
  </>
  );
}

export default Homepage;
