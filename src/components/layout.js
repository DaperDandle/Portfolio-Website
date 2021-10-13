import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from "./navigation";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Navigation />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
