import React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo.png";

const Navigation = () => {
  return (
    <Container fluid className="p-0 border-bottom border-primary border-3">
      <Navbar expand="lg">
        <Navbar.Brand className="ms-4">
          <Link to="/">
            <img src={logo} alt="Daniel Weber Logo" className="ms-3" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light me-5"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="justify-content-around w-100 fs-4">
            <Nav.Link className="p-3">
              <Link to="/" className="text-decoration-none text-dark">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="p-3">
              <Link to="/about" className="text-decoration-none text-dark">
                About Me
              </Link>
            </Nav.Link>
            <Nav.Link className="p-3">
              <Link to="/projects" className="text-decoration-none text-dark">
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link className="p-3">
              <Link to="/resume" className="text-decoration-none text-dark">
                Resume
              </Link>
            </Nav.Link>
            <Nav.Link className="p-3">
              <Link to="/contact" className="text-decoration-none text-dark">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
