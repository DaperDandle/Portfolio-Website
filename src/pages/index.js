import React from "react";
import Layout from "../components/layout";
import TechCloud from "../components/techCloud";
import { Col, Row, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Index = () => {
  return (
    <Layout>
      <Container fluid className="py-5 br-3">
        <Row className="pb-3">
          <Col className="d-flex flex-column text-center text-white pb-5">
            <h1 className="text-center feature-txt">DAN WEBER</h1>
            <h5>WEB DEVELOPER &bull; WEB DESIGNER</h5>
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
        </Row>
        <Row className="pb-4">
          <Col>
            <TechCloud />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Index;
