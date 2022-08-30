import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <Row className="my-5 newsletter">
      <Col
        className="p-5 d-flex justify-content-center align-items-center"
        lg={6}
        sm={12}
      >
        <div>
          <h3>Subscribe to Newsletter</h3>
          <p>You are agreeing to receive too much junk mail now. lol</p>
        </div>
      </Col>
      <Col className="p-5 d-flex justify-content-center align-items-center">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter your mail address"
            aria-label="Enter your mail address"
            aria-describedby="basic-addon2"
          />
          <Button
            variant="success"
            className="newsletter-btn"
            id="button-addon2"
          >
            Discover <MdOutlineArrowForwardIos />
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Newsletter;
