import React from 'react'

const Service = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
}

export default Service