import React from "react";
import Container from "react-bootstrap/Container";
import { RiGatsbyLine } from "react-icons/ri";
const Footer = () => {
  return (
    <Container fluid className="text-white hero-bg p-3">
      <footer className="d-flex justify-content-around">
        <p className="h5">
          Created with <RiGatsbyLine size={20} />
          atsby.js by{" "}
          <a
            href="mailto:danielweber4420@gmail.com"
            className="text-decoration-none link-light"
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
