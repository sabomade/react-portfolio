import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";

function About() {
  return (
    <section id="about" className="aboutRow">
      <Row>
        <Col size="md-4">
          <div class="card">
            <img
              class="card-img-top fluid selfie pic greet"
              src="assets/sb.jpg"
              alt="sara bolduc"
            />
            <div class="card-body">
              <p class="card-text greet">Hi there, I'm Sara!</p>
            </div>
          </div>
        </Col>
        <Col size="md-6">
          <p className="lead">
            <span className="head">Full Stack Developer</span> <br />
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
