import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import { globalStyles, heroBg } from "../css/layout.module.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Layout = ({ children }) => {
  return (
    <main className={globalStyles}>
      <Navigation />
      <Container fluid className={`${heroBg} w-100 h-100`}>
        {children}
      </Container>
      <Footer />
    </main>
  );
};

export default Layout;
