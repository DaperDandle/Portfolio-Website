import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/SEO";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Error"></SEO>
      <main>
        <Link to="/">Go home</Link>.
      </main>
    </Layout>
  );
};

export default NotFoundPage;
