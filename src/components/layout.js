import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";

import { globalStyles } from "../css/layout.module.css";

const Layout = ({ children }) => {
  return (
    <main className={globalStyles}>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
