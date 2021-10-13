import React from "react";
import Layout from "../components/layout";
import { Col, Row, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => {
  return (
    <Layout>
      <Container fluid className="my-5 bg-primary bg-gradient">
        <Row className="justify-content-around">
          <Col sm={4}>
            <Container className="bg-primary rounded-circle p-2">
              <StaticImage
                src="../images/me.jpg"
                alt="Daniel Weber"
                className="img-fluid rounded-circle"
              />
            </Container>
          </Col>
          <Col sm={5}>
            <h1 className="text-center">Hi, I'm Dan!</h1>
            <hr className="bg-primary" />
            <p>
              Welcome to my portfolio website. This is where you can find some
              of the projects I've been working on and see them in action.
              Access to the source code is also available!
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Index;
