import React from "react";
import Container from "react-bootstrap/Container";
const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light p-3">
      <footer className="d-flex justify-content-around">
        <p className="h5">
          Created with Gatsby by{" "}
          <a
            href="mailto:danielweber4420@gmail.com"
            className="text-decoration-none"
          >
            Daniel Weber
          </a>{" "}
          &copy;{new Date().getFullYear()}
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
