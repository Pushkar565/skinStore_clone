import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./ImageCarousel.css"; // For styling

import img1 from "../assets/hompage/1.avif";
import img2 from "../assets/hompage/2.avif";
import img3 from "../assets/hompage/3.avif";
import img4 from "../assets/hompage/4.avif";
import img5 from "../assets/hompage/5.avif";

const ImageCarousel = () => {
  // List of images for the carousel
  const images = [img1, img2, img3, img4, img5];

  const [currentSlide, setCurrentSlide] = useState(0); // Current active slide

  // Automatically change slide every 7 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 7000); // Change slide every 7 seconds

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
            <Link to="/productPage"> {/* Wrap the image in Link for navigation */}
              <img src={image} alt={`Slide ${index}`} />
            </Link>
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
