import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <Container className="pt-3 fs-5">
        <h1 className="text-center text-white bg-primary">
          A Little About Me!
        </h1>
        <Row className="justify-content-between">
          <Col md={5} className="m-3">
            <StaticImage
              src="../images/me.jpg"
              alt="me"
              className="img-fluid rounded-circle border border-dark border-5"
            />
          </Col>
          <Col md={5} className="card m-3 p-3 border-primary border-5">
            <p>
              My name is Daniel Weber, I live in Kansas City Missouri with my
              wife Cassie and my cat Odin. I love problem solving and taking a
              vision from the drawing board to fully functional application. I'm
              an aspiring front-end developer with experience using React, and
              Gatsby for personal web development projects, some of which you
              can find on this site.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col md={5} className="m-3">
            <StaticImage
              src="../images/band.jpg"
              alt="me"
              className="img-fluid border border-dark border-5"
            />
          </Col>
          <Col md={5} className="card m-3 p-3 border-primary border-5">
            <p>
              I love both listening to and making music. I play lead guitar in a
              band called the Protesters. We play fast, loud punk rock all
              around Kansas City and the surrounding area.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col md={5} className="m-3">
            <StaticImage
              src="../images/mtg.jpg"
              alt="Photo by https://unsplash.com/@ryanquintal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText Ryan Quintal"
              className="img-fluid border border-dark border-5"
            />
          </Col>
          <Col md={5} className="card  m-3 p-3 border-primary border-5">
            <p>
              I'm also a collector and player of the card game, Magic: the
              Gathering. I love using my problem solving skills and critical
              thinking to defeat my opponents!
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
