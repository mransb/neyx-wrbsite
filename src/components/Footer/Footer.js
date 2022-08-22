import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="body">
      <Row>
        <Col lg={3} sm={12}>
          <h4>NeyX</h4>
          <p className="mt-4">
            Some description about the company, just for example purpose, no one
            is going to ever read this ever, you have agood day. not
          </p>
        </Col>
        <Col sm={2} md={3} lg={2} className="d-flex justify-content-center">
          <div>
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </Col>
        <Col sm={2} md={3} lg={2} className="d-flex justify-content-center">
          <div>
            <h2>Get help</h2>
            <ul>
              <li>Support Center</li>
              <li>Service</li>
              <li>Quick chat</li>
            </ul>
          </div>
        </Col>
        <Col sm={2} md={3} lg={2} className="d-flex justify-content-center">
          <div>
            <h2>Support</h2>
            <ul>
              <li>FAQ</li>
              <li>Policy</li>
              <li>Support</li>
            </ul>
          </div>
        </Col>
        <Col sm={2} md={3} lg={2} className="d-flex justify-content-center">
          <div>
            <h2>Contact</h2>
            <ul>
              <li>Mail</li>
              <li>27/7</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <div className="p-2">
            <BsFacebook />
          </div>
          <div className="p-2">
            <AiFillInstagram />
          </div>
          <div className="p-2">
            <BsLinkedin />
          </div>
        </Col>
        <hr className="mt-5" />
      </Row>
    </div>
  );
};

export default Footer;
