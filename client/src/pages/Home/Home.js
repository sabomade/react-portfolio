import React from "react";
import Carousel from "../../Components/Carousel";
import Nav from "../../Components/Nav";
import About from "../../Components/About";
import Work from "../../Components/Work";
import Contact from "../../Components/Contact";
import Quote from "../../Components/Quote";
import { Container } from "../../Components/Grid";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Carousel />
        <Nav />
        <About />
        <Quote />
        <Work />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
