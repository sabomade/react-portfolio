import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";

function About() {
  return (
    <section id="about" className="aboutRow">
      <Row>
        <Col size="md-4">
          <img
            src="assets/sb.jpg"
            className="img-fluid selfie pic"
            alt="sara bolduc"
          />
        </Col>
        <Col size="md-6">
          <p className="lead">
            <strong>Full Stack Developer</strong> <br />
            <span className="sub">
              with experience in Maker Education, media, and film
            </span>
            <br />
            <br />
            Using art & technology as mediums, I have designed learning
            experiences and social events aimed to inspire curiosity & spark
            imagination for over 2,000 students & families. I want to build
            applications that have a social impact & foster community and
            collaboration.
          </p>
        </Col>
      </Row>
    </section>
  );
}
export default About;
