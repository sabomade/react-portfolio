import React from "react";
import Carousel from "../../Components/Carousel";
import Nav from "../../Components/Nav";
import About from "../../Components/About";
import Work from "../../Components/Work";
import Contact from "../../Components/Contact";

const Home = () => {
  return (
    <>
      <Carousel />
      <Nav />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
