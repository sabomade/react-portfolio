import React from "react";
import Work from "../../Components/Work";
import Carousel from "../../Components/Carousel";
import About from "../../Components/About";
import Contact from "../../Components/Contact";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
