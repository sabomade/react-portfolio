import React from "react";
// import Carousel from "../../Components/Carousel";
import Jumbotron from "../../Components/Jumbotron";
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
        <Nav />
        <Jumbotron />
        <About />
        <Quote />
        <Work />
        <Quote />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
