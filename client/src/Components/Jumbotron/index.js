import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";
import Carousel from "../Carousel";

function Jumbotron() {
  return (
    <>
      <Container>
        <Row>
          <div clasName="col-lg-3 pt-5 pt-lg-0 d-flex">
            <h2>Sara Bolduc</h2>
          </div>
          <div className=" align-items-right justify-content-right">
            <Carousel />
          </div>
        </Row>
      </Container>
    </>
  );
}
export default Jumbotron;
