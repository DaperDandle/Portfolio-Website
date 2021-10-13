import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
