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
          <Col md={5} className="m-3 p-3">
            <p>
              My name is Daniel Weber, I live in Kansas City Missouri with my
              wife. I have experience using React, and Gatsby to create
              inovative, elegant front end applications. I love problem solving,
              being creative and taking a vision from the drawing board to fully
              functional application.
            </p>
            <hr className="secondary-bg" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
