import React from "react";
import { Link } from "gatsby";
import { Navbar, Container, Nav } from "react-bootstrap";

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
            <Link
              to="/"
              className="text-decoration-none link-dark p-3"
              activeClassName="fw-bolder text-decoration-underline"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-decoration-none link-dark p-3"
              activeClassName="fw-bolder text-decoration-underline"
            >
              About Me
            </Link>

            <Link
              to="/projects"
              className="text-decoration-none link-dark p-3"
              activeClassName="fw-bolder text-decoration-underline"
            >
              Projects
            </Link>

            <Link
              to="/resume"
              className="text-decoration-none link-dark p-3"
              activeClassName="fw-bolder text-decoration-underline"
            >
              Resumé
            </Link>

            <Link
              to="/contact"
              className="text-decoration-none link-dark p-3"
              activeClassName="fw-bolder text-decoration-underline"
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
