import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import TechLogos from "../components/techLogos";
import SEO from "../components/SEO";

const About = () => {
  return (
    <Layout>
      <SEO title="About"></SEO>
      <Container className="pt-3 fs-5">
        <Row className="justify-content-around">
          <Col md={5} className="m-3">
            <StaticImage
              src="../images/me-2.jpg"
              alt="me"
              className="img-fluid rounded-circle"
            />
          </Col>
          <Col
            md={5}
            className="m-3 p-3 rounded-circle secondary-bg text-center d-flex align-items-center primary-text justify-content-start"
          >
            <p className="p-4">
              I'm Dan Weber, a Kansas City native looking to break into the web
              development field. I love using technologies like{" "}
              <span className="text-white fw-bold">
                React, Gatsby, Bootstrap
              </span>{" "}
              and <span className="text-white fw-bold">Sass </span>
              to create inovative, elegant front end applications. I'm a problem
              solver, and enjoy being creative while taking a vision from the
              drawing board to fully functional application.
            </p>
            <hr className="secondary-bg" />
          </Col>
        </Row>
        <Row className="py-3">
          <h1 className="text-center text-white">Some of my Favorite Tools</h1>
        </Row>
        <Row>
          <TechLogos></TechLogos>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
