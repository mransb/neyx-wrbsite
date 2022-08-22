import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Carousel from "react-bootstrap/Carousel";
import HomeCards from "./HomeCards";
import Newsletter from "../../components/Newsletter";
import "./Home.css";

const Home = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col className="mt-5 section-1">
          <h1 className="mt-5">No More Non-Productive Phone Calls</h1>
          <Col lg={8}>
            <p className="mt-5">
              You are getting more than 10 cold calls a day, and that’s
              affecting your productivity. Don’t worry we have got you covered.
              A way that your time doesn’t get coped up by numerous unrelated
              services offering cold calls.
            </p>

            <InputGroup className="my-5">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
            <p className="mt-4">
              Get started by telling us exactly what you need, we have got you
              covered.{" "}
            </p>
          </Col>
        </Col>
        <Col lg={6} sm={12} className="mt-5 d-flex justify-content-center">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/b22a/5f30/b3409eec92df187ddb26019549efd686?Expires=1661731200&Signature=O050BBZ0jr5lPMhiNxZHrPiyvMWhHqJFRVja-dJPnBLzhsrZbBUZ-HaR3HoTziCHKp-19LKA3N58RMbGHRM7mz4g1aCOFmepfSRq2--skMQvtC7uYJZUBJ7urOAwS4~TBLLn0YvWkg2E4OqRH-xrJeMR-k7bX9Qb9SAigyWLGDJ37oaxiBcV65QSZmeZIWslQkHhcQ11ao2SqmuNUOec608Abd6x4~2YQmCIet6ED0tVIQEnusDODVOoXEzyAznRqiXRQ1qiT6jHZ3McD8S6Z-ncSnatrPdu5NIwqVNFNZaTRDkzBBZzuKtSeTQbQgblVzpPl~1q4fU-Quv5NUPvTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
              width="90%"
              height="80%"
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-5 section-2">
        <Col sm={12} className="mt-3">
          <p>Some random text here</p>
          <h2>Perks of using our smart platform.</h2>
        </Col>
        <Col sm={12} className="mt-3">
          <h2>No Cold Calls</h2>
          <p>
            Through LinkedIn presence and manual diversion of calls, we make
            your day more productive
          </p>
        </Col>
        <Col sm={12} className="mt-3">
          <h2>Smart partner</h2>
          <p>
            When you need service providers, don’t go searching and verifying,
            through our verified vendors, get access to all the services you
            need in every domain
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-5 text-center">
          <div>
            <h2>
              How can we help your <br /> business?
            </h2>
            <p className="mt-3">Unique approach to solve common problem.</p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col lg={4}>
          <h2>Advanced Lead Generation </h2>
          <p>
            Maintaining your lead flow is the key to your business, and you can
            achieve that 100% by working with us. Qualified leads without boring
            cold calls
          </p>
        </Col>
        <Col lg={4}>
          <h2>Dashboard Monitoring</h2>
          <p>
            With our dynamic dashboard, check how many calls you are receiving,
            among them how many are junk and unrelated and how many introductory
            meetings we are taking.
          </p>
        </Col>
        <Col lg={4}>
          <h2>Dedicated Account Manager</h2>
          <p>
            We’ll assign a dedicated account manager for you to take calls,
            receive cold mails and qualify your cold reaches to a potential
            value addition.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={6} sm={12}>
          <img
            src="https://s3-alpha-sig.figma.com/img/012a/6be6/7ffee43147ffb81580437e769a93afc6?Expires=1661731200&Signature=eEqw9itm9Qy8DieN9Q6JT~jJr7uSgyeqq6BMMmv7TON9HM2hHgbh9YCcDk5PdnGvrpRoNkvJqgXncPOroV17vgRmy3~7Shuz4abY4ZfjUOxtHPqHXX-LUY4aNQtYK7R9w4VVQDcILsOtUMwT9VuE24ypZN4O9oask-XdOIMC3zoxneuXorZdAijEMU-Z0zqA3bW9~s2fUXoiFI~Gb3mj2FLt2-zU0y7ck1KffvU1A6sEIkM~PEMcRqzhJOGirJ9fzlNm9jCiDiKUy8cXxcke~4K5x2TOs~eVZPCKPVHeavF~orJH9xg75u5ZL5oqGu6VzVAeLdGtTLBGP7rlVScZHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            width="100%"
            height="100%"
          />
        </Col>
        <Col>
          <p className="section-5-p">SCHEDULE</p>
          <h2>
            Great customer <br /> relationship starts here
          </h2>
          <p className="mt-3">
            We are customer obsessed people. Your satisfaction is our first
            priority. We love solving problems and exceeding your expectations.
            We're redefining customer satisfaction, one happy customer at a
            time.
          </p>
          <a href="" className="mt-4">
            Learn more about our customer satisfaction
          </a>
          <div>
            <Button variant="primary" className="mt-4">
              Primary
            </Button>{" "}
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>
            How we created a smart platform,
            <br /> where we take your cold calls
          </h2>
          <p className="mt-4">
            After you sign up with us, we assign one account manager for you,
            who will receive the cold calls on your company’s behalf, will take
            the first level of introductory call to see if it’s a good value
            addition, then according to your specific requirements, we’ll align
            your respective team to it.
          </p>
          <a href="" className="mt-4">
            Learn more{" "}
          </a>
          <div>
            <Button variant="primary" className="mt-4">
              Primary
            </Button>{" "}
          </div>
        </Col>
        <Col lg={6} sm={12} className="d-flex justify-content-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/9407/cfae/a12551eb8b8b0dec8d6f316717836829?Expires=1661731200&Signature=hhIV2V4lQpWOgavQqSNZFjWCftu~4UyMAfiO8zjjRbfn0qmu9mrxxcoRx3y26B8st7mTtAQV5oOOckUQTq15gOEWa1mtJiXYF5UfKwZvSlH0lrqIjO6H7eJM08Csgx6DIF0U9j9zL1wnvlki5xHTT3iqvD~5BPfCpg~r-0-I-Fkv3x6I8d8TeMjtJS40Vx0dzi~V-Jk63qUOplGv889ovXHfS1nFNxoXpEaTeVvThqPaYfBo8BbBhXi5atpMiijlxhcT9y6v1DsjoCqOsMeKdDFgfvfq5TwQjfxdBDbyqRE9Aa0NVnkByTx6hoUsP8nk9Dd4szIsXC4tDEPmZYUh1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            width="100%"
            height="100%"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Future of support with new shape</h2>
          <p className="mt-5">
            Discuss your goals, determine success metrix, identify problems
          </p>
          <ul className="mt-5">
            <li>
              Discuss your goals, determine success Metrix, identify problems
            </li>
          </ul>
          <div className="mt-5">
            <Button variant="primary">Primary</Button>{" "}
          </div>
        </Col>
        <Col className="mt-5">
          <Row>
            <Col>
              <HomeCards
                heading="Web design"
                content="One for all and all for one, always in the ready"
              />
            </Col>
            <Col>
              <HomeCards
                heading="Ad-Creatives"
                content="One for all and all for one, always in the ready"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <HomeCards
                heading="Automation"
                content="One for all and all for one, always in the ready"
              />
            </Col>
            <Col>
              <HomeCards
                heading="Infographics"
                content="One for all and all for one, always in the ready"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <div>
            <h2>What our happy client say</h2>
            <p>some description of them that noone knows</p>
          </div>
        </Col>
      </Row>
      <Row>
        {" "}
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Newsletter />
    </Container>
  );
};

export default Home;
