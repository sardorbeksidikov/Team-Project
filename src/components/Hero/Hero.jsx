import React, { useState } from 'react'
import './Hero.scss'


const Hero = ({images}) => {
     const [currentIndex, setCurrentIndex] = useState(0);

     const goToNext = () => {
       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
     };

     const goToPrevious = () => {
       setCurrentIndex(
         (prevIndex) => (prevIndex - 1 + images.length) % images.length
       );
     };
  return (
    <div>
      <div className="carousel">
        <button className="carousel-button prev" onClick={goToPrevious}>
          ❮
        </button>
        <div className="carousel-images">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${
                index === currentIndex ? "active" : ""
              }`}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={goToNext}>
          ❯
        </button>
      </div>
      
    </div>
  );
}

export default Hero