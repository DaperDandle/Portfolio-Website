import React from "react";
import Layout from "../components/layout";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
const Resume = () => {
  return (
    <Layout>
      <Container className="py-5">
        <h1 className="text-center">My Experience</h1>
        <Row>
          <Col></Col>
        </Row>
        <Accordion defaultActiveKey="0" className="p-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body className="d-flex flex-wrap justify-content-center">
              <StaticImage
                src="../images/park-logo.png"
                alt="Park University Logo"
                className="w-100 me-3"
              />
              <p>
                <a
                  href="https://www.park.edu/"
                  style={{ color: "maroon", textDecoration: "none" }}
                >
                  Park University
                </a>
                : Bachelors of Computer Science in Software Engineering;
                <br />
                Undergraduate Certificate in Computer Networking
                <br />
                Suma Cum Laude GPA: 3.94
              </p>
              <StaticImage
                src="../images/bachelors-degree.jpg"
                alt="Bachelors Degree"
                className="border border-dark border-2 my-2"
              />
              <StaticImage
                src="../images/networking-cert.jpg"
                alt="Networking Certificate"
                className="border border-dark border-2 my-2"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Work Experience</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Technologies Used</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Honors and Certifications</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Layout>
  );
};

export default Resume;
