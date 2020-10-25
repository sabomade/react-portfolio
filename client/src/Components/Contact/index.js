import React, { useState } from "react";
import "./style.css";
import { Row, Col } from "../Grid";
import Modal from "../Modal";
import Button from "../Button";

function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section id="contact" className="contactRow">
        <Row>
          <Col size="md-12">
            <h1 className="display-5 contactLink">Say hello.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="contactLink">
              <a onClick={handleShow}>Get in touch</a>
            </div>
          </Col>
        </Row>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Contact;
