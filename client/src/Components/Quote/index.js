import React from "react";
import "./style.css";
import { Col, Row } from "../Grid";

function Quote() {
  return (
    <section id="quote" className="quoteRow">
      <Row>
        <div className="quoteCol">
          <Col size="md-12">
            <p></p>
          </Col>
        </div>
      </Row>
    </section>
  );
}
export default Quote;
