import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";
import Carousel from "../Carousel";

function Jumbotron() {
  return (
    <>
      <Container>
        <div className="jumbo-intro">
          <Row>
            <Col size="md-6">
              <h2 className="title-name">Sara Bolduc</h2>
              <p className="name-bio">Full Stack Developer | Maker Educator</p>
            </Col>
            <Col size="md-6">
              <Carousel />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
export default Jumbotron;
