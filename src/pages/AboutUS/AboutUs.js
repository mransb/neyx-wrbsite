import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AboutUsCard from "./AboutUsCard";
import EmployeeCard from "./EmployeeCard";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Newsletter from "../../components/Newsletter/Newsletter";

const AboutUs = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={12} lg={6} className="d-flex align-items-center">
          <div>
            <h2>We boost the growth for Startup to Fortune 500 Companies</h2>
            <p className="mt-3">
              We help do that we help do this, basically we do all the work and
              you do nothing, so you can shut the hell up
            </p>
            <Button className="mt-3" variant="primary">
              Primary
            </Button>{" "}
          </div>
        </Col>
        <Col className="mt-3" sm={12} lg={6}>
          <img
            src="https://s3-alpha-sig.figma.com/img/e283/273a/1a052840f38b5aa2a76d6bb11e91a0a6?Expires=1661731200&Signature=cOtKuIo58RPmchsA5Ykjpkdew1zRNYlKeNlKe7Xhzjfuqyu8whbqf8pbKEUbYE756pPA20oaWMEomN~puCM5C3G6Nx~AWjocYO6bhxRabI-bh7DwQXft6B2qWEgslYmOShRfdi1VXxZJ8tm4oC5VIJ7eIc2RjhXRwDS~loPdaFGhrObga9kldtUdm01B2-8Q1Re9aeKio7U~yDqoJ3yNqwgo~9OWnQy2w5rurbqKMOwOK3Z5OcGS2Mw4tA3B2irNoo0jnuofGl3kd4Ayn4ftH5-GMqvl1UUZU2QlG8XAZxH4SN8rlKU5kzq0cuBlt7TPrJYnWAjIWihvqH4-xwKSeA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            width="100%"
            height="100%"
          />
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col lg={4} className="d-flex justify-content-center text-center">
          <div>
            <h2>How can we help your business?</h2>
            <p className="mt-3">
              We help do that we help do this, basically we do all the work and
              you do nothing, so you can shut the hell up
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <AboutUsCard
            title="Our Story"
            content="From years of lead generation game to consultative approach for betterment, we have created an eco-system where businesses are done in proper way."
          />
        </Col>
        <Col>
          <AboutUsCard
            title="Our commitment"
            content="We saw a huge requirement in the market and grabbed it as a result CXO’s are leading a better productive day and we are committed to provide that satisfaction to our clients"
          />
        </Col>
        <Col>
          <AboutUsCard
            title="Technology driven solutions"
            content="Solving a common problem with the best technology in the market available. Sign up with us now to enjoy the benefit of being a NeyX customer."
          />
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col lg={3} className="d-flex justify-content-center text-center">
          <h2>Let’s Get to know us now</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <EmployeeCard />
        </Col>
        <Col>
          <EmployeeCard />
        </Col>
        <Col>
          <EmployeeCard />
        </Col>
        <Col>
          <EmployeeCard />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex align-items-center">
          <div>
            <h2>Ready to join our awesome team and Fun work culture? </h2>
            <p className="mt-3">
              We help do that we help do this, basically we do all the work and
              you do nothing, so you can shut the hell up
            </p>
            <Button className="mt-3" variant="primary">
              Primary
            </Button>{" "}
          </div>
        </Col>
        <Col className="d-flex justify-content-center mt-3" sm={12} lg={6}>
          <img
            src="https://s3-alpha-sig.figma.com/img/f36e/661a/3bc3ba5d9d1a0486c16c5225db5fde4d?Expires=1661731200&Signature=MDEITdLo4SBZ0XjKEgU88oCaCIpABK9LwQfUgrgd1HBv56hX67aSDuwCmhuYef1qrvHQpEsFN2~xR-Kc8aiMwRlZYZGh1lNxleEKgMmQMTTQr-SZn236HVPteNQN2MMpylSs1pRA8kBSAje5Z85GIjZerV1EMhGlaUqVbrFQUpaGa~F~pCUcSFCum6kiJQvyErIbABsp864IMNGzVH1oQjHrPApJH1zqW3SrC63rh9YCmcpLry3JeLX3HgLCVAgtjjK8ZsoovCOUTFsaX03V7J-oKPbmqoK5X7lqGziL0iyq3C2EqmFFxZqkUCr1kGvbLznsOt-11YrXG5kZlnsF8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            width="100%"
            height="100%"
          />
        </Col>
      </Row>
      <Newsletter />
    </Container>
  );
};

export default AboutUs;
