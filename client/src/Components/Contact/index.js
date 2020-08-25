import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

function Contact() {
  return (
    <section id="contact" className="contactRow">
      <Row>
        <Col size="md-12">
          <h1 className="display-5 contactLink">Say hello.</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="contactLink">
            <a href="#">Get in touch</a>
          </div>
        </Col>
      </Row>
    </section>
  );
}
export default Contact;
