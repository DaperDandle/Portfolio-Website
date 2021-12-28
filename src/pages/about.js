import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <Container className="pt-3 fs-5">
        <Row className="justify-content-around">
          <Col md={5} className="m-3">
            <StaticImage
              src="../images/me-2.jpg"
              alt="me"
              className="img-fluid rounded-circle"
            />
          </Col>
          <Col md={5} className="text-white m-3 p-3">
            <p>
              My name is Daniel Weber, I live in Kansas City Missouri with my
              wife. I love problem solving, being creative and taking a vision
              from the drawing board to fully functional application. I'm a
              front-end developer with experience using React, and Gatsby.
            </p>
            <hr className="text-white" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
