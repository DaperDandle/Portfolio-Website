import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import "../css/main.scss";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Layout = ({ children }) => {
  return (
    <main className="global-styles">
      <Navigation />
      <Container fluid className="hero-bg  w-100 h-100">
        {children}
      </Container>
      <Footer />
    </main>
  );
};

export default Layout;
