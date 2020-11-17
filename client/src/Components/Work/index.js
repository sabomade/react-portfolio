import React from "react";
import "./style.css";
import { Col, Row } from "../Grid";
import { Link } from 'react-router-dom';

function Work() {
  return (
    <section id="work" className="workRow">
      <Row>
        <div className="colContainer">
          <Col size="md-3">
            <div class="card">
              <img
                class="card-img-top img-fluid selfie pic"
                src="assets/code.jpg"
                alt="web development"
              />
              <div class="card-body">
                <h4 class="card-title work-title">Web Development</h4>
                <p class="card-text">
                  Full stack site design, development, & deployment
                </p>
                <Link to="/portfolio">View Portfolio</Link>
              </div>
            </div>
          </Col>
          <Col size="md-3">
            <div class="card">
              <img
                class="card-img-top img-fluid selfie pic"
                src="assets/makerEd2.jpg"
                alt="maker education"
              />
              <div class="card-body">
                <h4 class="card-title work-title">Maker Education</h4>
                <p class="card-text">
                  STEAM-based curriculum design & facilitation for grades k-12
                </p>
                <a href="#!" class="">
                  Learn More
                </a>
              </div>
            </div>
          </Col>
          <Col size="md-3">
            <div class="card">
              <img
                class="card-img-top img-fluid selfie pic"
                src="assets/kit.jpg"
                alt="product development"
              />
              <div class="card-body">
                <h4 class="card-title work-title">Product Development</h4>
                <p class="card-text">STEAM-based kit design for ages 10+</p>
                <a href="#!" class="">
                  Learn More
                </a>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </section>
  );
}
export default Work;
