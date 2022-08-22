import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Newsletter = () => {
  return (
    <Row className="my-5 newsletter">
      <Col className="p-4" lg={6} sm={12}>
        <h3>Subscribe to Newsletter</h3>
        <p>You are agreeing to receive too much junk mail now. lol</p>
      </Col>
      <Col className="p-5">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Newsletter;
