import React from "react";
import "./style.css";
import { Col, Row } from "../Grid";

function Work() {
  return (
    <section id="work" className="workRow">
      <Row>
        <Col size="md-3">
          <img
            src="assets/code.jpg"
            alt="coding"
            className="img-fluid selfie pic"
          />
          <h3 className="lead">Web Development</h3>
        </Col>
        <Col size="md-3">
          <img
            src="assets/makerEd2.jpg"
            alt="coding"
            className="img-fluid selfie pic"
          />
          <h3 className="lead">Maker Education</h3>
        </Col>
        <Col size="md-3">
          <img
            src="assets/kit.jpg"
            alt="coding"
            className="img-fluid selfie pic"
          />
          <h3 className="lead">Product Development</h3>
        </Col>
      </Row>
    </section>
  );
}
export default Work;
