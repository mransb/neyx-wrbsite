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
          <h2 className="logo">
            Ney<span className="logo-span">X</span>
          </h2>
          <p className="mt-4">
            Some description about the company, just for example purpose, no one
            is going to ever read this ever, you have agood day. not
          </p>
        </Col>
        <Col sm={2} md={3} lg={2} className="d-flex justify-content-center">
          <div>
            <h2>Company</h2>
            <ul className="footer-list">
              <li>Home</li>
              <li>About</li>
              <li>Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </Col>
        <Col sm={2} md={3} lg={2} className="d-flex justify-content-center">
          <div>
            <h2 className="d-flex justify-content-center">Get help</h2>
            <ul className="footer-list">
              <li>Support Center</li>
              <li>Service</li>
              <li>Quick chat</li>
            </ul>
          </div>
        </Col>
        <Col sm={2} md={3} lg={2} className="d-flex justify-content-center">
          <div>
            <h2 className="d-flex justify-content-center">Support</h2>
            <ul className="footer-list">
              <li>FAQ</li>
              <li>Policy</li>
              <li>Support</li>
            </ul>
          </div>
        </Col>
        <Col sm={2} md={3} lg={2} className="d-flex justify-content-center">
          <div>
            <h2 className="d-flex justify-content-center">Contact</h2>
            <ul className="footer-list">
              <li>Mail</li>
              <li>27/7</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex logo-container">
          <div className="p-2">
            <BsFacebook className="footer-icon1" />
          </div>
          <div className="p-2">
            <AiFillInstagram className="footer-icon2" />
          </div>
          <div className="p-2">
            <BsLinkedin className="footer-icon3" />
          </div>
        </Col>
        <hr className="mt-5" />
        <div className="footer-end">
          <p>Terms and Conditions</p>
          <p>Made in India</p>
        </div>
      </Row>
    </div>
  );
};

export default Footer;
