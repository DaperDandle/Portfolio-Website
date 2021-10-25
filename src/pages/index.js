import React from "react";
import Layout from "../components/layout";
import { Col, Row, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { DiGithubAlt } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.css";
import { heroImg } from "../css/index.module.css";
const Index = () => {
  return (
    <Layout>
      <Container fluid className="p-5 br-3">
        <Row className="justify-content-around">
          <Col md={4}>
            <Container className="bg-primary rounded-circle p-2">
              <StaticImage
                src="../images/me.jpg"
                alt="Daniel Weber"
                className={` ${heroImg}img-fluid rounded-circle`}
              />
            </Container>
          </Col>
          <Col md={5} className="bg-white card p-5">
            <h1 className="text-center">Hi, I'm Dan!</h1>
            <hr className="bg-dark" />
            <p className="fs-4">
              Welcome to my portfolio website. I am an aspiring front-end
              developer looking to break into the industry. This is where you
              can find some of the projects I've been working on and see them in
              action. Access to the source code is also available!
            </p>
            <hr />
            <br />
            <div className="align-items-center">
              <h4>Check out my Github and LinkedIn!</h4>
              <a href="https://github.com/DaperDandle" className="me-3">
                <DiGithubAlt size={32} />
              </a>
              <a href="https://www.linkedin.com/in/daniel-weber-a0a125219/">
                <BsLinkedin size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Index;
