import React, { useState, useEffect } from "react";
import "./ImageCarousel.css"; // For styling

import img1 from "../assets/hompage/1.avif";
import img2 from "../assets/hompage/2.avif"
import img3 from "../assets/hompage/3.avif"
import img4 from "../assets/hompage/4.avif"
import img5 from "../assets/hompage/5.avif"


const ImageCarousel = () => {
  // List of images for the carousel
  const images = [img1,img2,img3,img4,img5];

  const [currentSlide, setCurrentSlide] = useState(0); // Current active slide

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Clear interval on unmount
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      {/* Carousel Dots for navigation */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
