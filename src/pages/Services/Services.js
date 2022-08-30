import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ServiceCardSec1 from "./ServiceCardSec1";
import "./Services.css";
import Newsletter from "../../components/Newsletter/Newsletter";

const Services = () => {
  return (
    <div className="main">
      <Row className="row-1 pb-5 mt-5">
        <Col
          lg={7}
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1>
              We boost the growth for{" "}
              <span className="first-span">Startup</span> to Fortune 500
              Companies
            </h1>
            <p className="mt-5">
              We help do that we help do this, basically we do all the work and
              you do nothing, so you can shut the hell up
            </p>
            <Button variant="primary" className="mt-4 btns px-4">
              Contact
            </Button>
            <div className="d-flex mt-5">
              <Col>
                <p className="sec-1-30plus">
                  <span className="second-span">30+</span> <br /> years of{" "}
                  <br />
                  Experience
                </p>
              </Col>
              <Col>
                <p className="sec-1-30plus">
                  <span className="second-span">30+</span> <br /> years of{" "}
                  <br />
                  Experience
                </p>
              </Col>
              <Col>
                <p className="sec-1-30plus">
                  <span className="second-span">30+</span> <br /> years of{" "}
                  <br />
                  Experience
                </p>
              </Col>
            </div>
          </div>
        </Col>
        <Col
          lg={5}
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-start"
        >
          {" "}
          <img
            src="https://s3-alpha-sig.figma.com/img/ca9c/0150/9df7f8acd72ca2e6526598eefff5a593?Expires=1662336000&Signature=AZ8TadDccPOMNTZfflUnE6WnxYMVhMnNOOj0cHIbnVmSmUTbsoZCtrquxnZzX9BXvbkVsJ4NcyRHDy20c-~wdOHkS4vXUOwsbVUaJhcrKGSIG6T7oBWa1I4q9tWWjMWrD-O6kxat9Ydy8FaTaFdsp~H5cGiyuTDyI0lSyVOAAPMTvwxEi7NwARJIref7TsH3VT8J5rEHMkVkMBEYD9seTgaVRdbiiVBHGbHkywTYJpNF-2u~7Yvzucr3ES~Vd9ka~wOYroAGc-Q9JHr8Qsqe~tdIHwsTTgJyNhHoNBXBHxW-RS1TSClSPRyrSsaX4y~aUyw9i1C8g6BsNCf9qLY5MQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            width="380vw"
            height="580vh"
          />
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center align-items-center">
        <Col
          className="d-flex justify-content-center align-items-center"
          lg={4}
          md={4}
          sm={12}
        >
          {" "}
          <ServiceCardSec1
            number="01"
            header="Consumer Insights"
            para="We help do that we help do this, basically we do all the work and you do not"
          />
        </Col>

        <Col
          className="d-flex justify-content-center align-items-center"
          lg={4}
          md={4}
          sm={12}
        >
          {" "}
          <ServiceCardSec1
            number="02"
            header="Consumer Insights"
            para="We help do that we help do this, basically we do all the work and you do not"
          />
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          lg={4}
          md={4}
          sm={12}
        >
          {" "}
          <ServiceCardSec1
            number="03"
            header="Consumer Insights"
            para="We help do that we help do this, basically we do all the work and you do not"
          />
        </Col>
      </Row>
      <Row>
        <Col
          lg={5}
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-start mb-5"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/5f07/5611/ec3f01bad651ac4cf77c591ba45cafb3?Expires=1662336000&Signature=Es4abc6wwpPOR6007XeHkjTJg~4RP1I23oONz4LvY06ZTMS9hZgQNXe71kt43aoiYEFLJrkvrMJIYeABWsB24ukUh~pWTL6RLGrQz9VXz1mxljWtoPerXgcJTemG4hrGClO4MriEVyF7xbBBTiJtVu1B2ABhoP8k-iVqaIm41JUPh643u11sUUdyvj4E-5S~gRKPYtBdPyYV4MdU-cGdxcMu8YOfvVMVAh-StVvSZw98W9maDUMJ1Wu2c0WNuVt2CYOSDkgA0zeEP7tyyJYqEEF1CB-C2jPJvbcq46hSyJvVusZjjRrH6gTuxFRKMPhE888xlWpGQfd3zyJr5fE~MA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            width="380vw"
            height="580vh"
          />
        </Col>
        <Col
          lg={7}
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-end mb-5"
        >
          <div>
            <h1>
              We boost the growth for{" "}
              <span className="first-span">Startup</span> to Fortune 500
              Companies
            </h1>
            <p className="mt-5">
              We help do that we help do this, basically we do all the work and
              you do nothing, so you can shut the hell up
            </p>
            <Button variant="primary" className="mt-4 btns px-4">
              Contact
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          lg={6}
          md={6}
          sm={12}
          className="d-flex justify-content-center align-items-center my-5"
        >
          <div className="px-5">
            <h1>
              We boost the growth for{" "}
              <span className="first-span">Startup</span> to Fortune 500
              Companies
            </h1>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          sm={12}
          className="d-flex justify-content-center align-items-center my-5"
        >
          <div className="px-5">
            <h5>Something Heading</h5>
            <p>
              We help do that we help do this, basically we do all the work and
              you do nothing, so you can shut the hell up We help do that we
              help do this, basically we
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center align-items-center">
        <Col
          className="d-flex justify-content-center align-items-center"
          lg={4}
          md={4}
          sm={12}
        >
          {" "}
          <ServiceCardSec1
            number="01"
            header="Consumer Insights"
            para="We help do that we help do this, basically we do all the work and you do not"
          />
        </Col>

        <Col
          className="d-flex justify-content-center align-items-center"
          lg={4}
          md={4}
          sm={12}
        >
          {" "}
          <ServiceCardSec1
            number="02"
            header="Consumer Insights"
            para="We help do that we help do this, basically we do all the work and you do not"
          />
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          lg={4}
          md={4}
          sm={12}
        >
          {" "}
          <ServiceCardSec1
            number="03"
            header="Consumer Insights"
            para="We help do that we help do this, basically we do all the work and you do not"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          className="mt-5 d-flex justify-content-center align-items-center"
          lg={6}
          md={6}
          sm={12}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/5983/86d8/1b8b8240eb35b5510309469c40ce1513?Expires=1662336000&Signature=RuWTnGIb-EHzTNEe7MC3pIvJD-zbibBH3C10MtTkUNFlX-QWt8yCs3xztau-Bso1-yqy8-w~gAGqs69UvYY0Eqiy14B3fco3I2U08Eyh2Lg80NrMIPQQOlqleBLSHYgsGNm2T9s43p~jO1RryqLgmEYEGk0xcENeEzSCLEB2LPDeC30CyjqFIh79JrHfyVlDr0W0crF2n1mgiiTffuIBvLXnKbMrz379Qcnzl0lm5Cu2cXtENuNl2wtC3a8cHsJz-6Fse-kZ~0tUl3x~mi9nAsBR~EHDjizW84XWpQk0QVII49C7UQgItq3bzcPaUa8mHKNyeE5qxKkkbAkB-XPaDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            width="380vw"
            height="380vh"
          />
        </Col>
        <Col
          className="mt-5 d-flex justify-content-center align-items-center"
          lg={6}
          md={6}
          sm={12}
        >
          <div>
            <h1 className="comma">“</h1>
            <h2>
              We help do that we help do this, basically we do all the work and
              you do nothing, so you can shut the hell up We help do that we
              help do this, basically we
            </h2>
          </div>
        </Col>
      </Row>
      <Newsletter />
    </div>
  );
};

export default Services;
