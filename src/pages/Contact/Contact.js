import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col lg={7} className="mt-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/d6e4/df08/d63f63354692eec9ae137ee4f11f7074?Expires=1661731200&Signature=G61iQqKH9kfXgVoq9MjG4ifdFcWugh0O9TBy5LbwvVwKaaPYCUAz8PGTIMoai2vTQ5uxqZVoPOgticHA8-7UPXiW4YiQ1iwcwwCK1xjWW7bFl7sgWbvx9Ru1swcaKEreGO9eVd4RZxr6PdyQ5jhJvZbJyUXaF3Nx2ZRQ6dZsoQ3pmteJbJOVjIqFI5HZIvXNbNVnQNMyE3FbNr9mxzsYsPxYBqUFPf0894WDHXz8ZH~i4Jvw4-u42nyQcB3oTNw73NxDLl-HyiW2Q4Upk6rS2yFS7opuHulzFOuP~lbnM-FpASUo30E8qlXwcY7IyFfbYXqqVhDgMsJBTWXgKhkp~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            width="100%"
            height="100%"
          />
        </Col>
        <Col lg={5} className="mt-5">
          <div className="px-5 mt-3">
            <h2>Contact Us</h2>
            <p>
              We are always very happy to answer you. Any questions or any
              doubts or if you just want to say Hi, please get in touch with us
              by leaving a message here. Our team will get back to you as soon
              as ­possible.
            </p>
            <Row>
              <Col lg={6}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col lg={6}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="tel" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" width="48" />
              </Form.Group>

              <Button variant="primary" type="submit" className="btns">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={2}>
          <div className="mx-3">
            <h4>Registered Address</h4>
            <p>Jangipara, Hooghly West Bengal, 712404</p>
          </div>
        </Col>
        <Col lg={2}>
          <div className="mx-3">
            <h4>Office Address</h4>
            <p>Saltlake, Sec- V Kolkata, 02</p>
          </div>
        </Col>
        <Col lg={2}>
          <div className="mx-3">
            <h4>Reach out</h4>
            <p>+91 8637889046 Mail at- contact@neyx.in</p>
          </div>
        </Col>
      </Row>
      <Newsletter />
    </Container>
  );
};

export default Contact;
