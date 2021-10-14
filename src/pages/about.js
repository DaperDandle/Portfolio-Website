import React from "react";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <Container className="bg-primary">
        <Row>
          <div className="card">
            <p>
              My name is Daniel Weber, I live in Kansas City Missouri with my
              wife Cassie and my cat Odin. I'm an aspiring front-end developer
              with experience using React, and Gatsby for personal web
              development projects, some of which you can find on this site.
            </p>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
