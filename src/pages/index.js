import React from "react";
import Layout from "../components/layout";
import TechCloud from "../components/techCloud";
import { Col, Row, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Index = () => {
  return (
    <Layout>
      <Container fluid className="p-5 br-3">
        <Row>
          <Col lg={5} className=" text-white p-5">
            <h1 className="text-center">My Name is Dan</h1>
            <hr className="bg-white" />
            <p className="fs-4">
              Welcome to my portfolio website. I am an aspiring front-end web
              developer looking to break into the industry. This is where you
              can find some of the projects I've been working on and see them in
              action. Access to the source code is also available on my Github.
              Please feel free to stay awhile and take a look around!
            </p>
            <hr className="bg-white" />
            <br />
            <div className="align-items-center text-center">
              <a href="https://github.com/DaperDandle" className="me-3 button">
                Github <FaGithub size={20} className="text-white ms-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-weber-a0a125219/"
                className="button"
              >
                LinkedIn <BsLinkedin size={20} className="text-white ms-1" />
              </a>
            </div>
          </Col>
          <Col>
            <TechCloud />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Index;
