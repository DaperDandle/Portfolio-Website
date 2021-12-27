import React from "react";
import { Link } from "gatsby";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Container fluid className="p-0 primary-bg ">
      <Navbar expand="lg" className="mx-3">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light me-5"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end w-100 fs-5">
            <Link
              to="/"
              className="text-decoration-none link-light p-3"
              activeClassName="fw-bolder text-decoration-underline"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-decoration-none link-light p-3"
              activeClassName="fw-bolder text-decoration-underline"
            >
              About Me
            </Link>

            <Link
              to="/projects"
              className="text-decoration-none link-light p-3"
              activeClassName="fw-bolder text-decoration-underline"
            >
              Projects
            </Link>

            <Link
              to="/resume"
              className="text-decoration-none link-light p-3"
              activeClassName="fw-bolder text-decoration-underline"
            >
              Resumé
            </Link>

            <Link
              to="/contact"
              className="text-decoration-none link-light p-3"
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
