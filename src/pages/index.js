import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import { Col, Row, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import FeaturedProjects from "../components/featuredProjects";

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid className="py-5 br-3">
        <Row className="pb-3">
          <Col className="d-flex flex-column text-center pb-5">
            <h1 className=" text-white text-center feature-txt">DAN WEBER</h1>
            <h5>
              WEB DEVELOPER <span className="text-white">&bull;</span> WEB
              DESIGNER
            </h5>
            <br />
            <div className="align-items-center text-center">
              <a href="https://github.com/DaperDandle" className="me-3 button">
                Github <FaGithub size={20} className="ms-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-weber-a0a125219/"
                className="button"
              >
                LinkedIn <BsLinkedin size={20} className="ms-1" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <FeaturedProjects />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Index;
