import React from "react";
import Images1 from "../assets/images1.avif";
import Images2 from "../assets/images2.jpeg";
import Images3 from "../assets/images3.jpg";
import Hero from "../components/Hero/Hero";

const App = () => {
  const images = [Images1, Images2, Images3];

  return (
    <div className="App">
      <h1>Uzum Market Hero Carousel</h1>
      <Hero images={images} />
    </div>
  );
};

export default App;
