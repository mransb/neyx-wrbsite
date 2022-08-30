import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: "white" }}
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="/">
          <h2 className="logo">
            Ney<span className="logo-span">X</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className="nav-link active links" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link links" aria-current="page" to="/aboutUs">
              About Us
            </Link>
            <Link className="nav-link links" aria-current="page" to="/services">
              Services
            </Link>
            <Link className="nav-link links" aria-current="page" to="/contact">
              Contact
            </Link>
            <Button className="ms-3 btns" variant="primary">
              Sign Up
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
