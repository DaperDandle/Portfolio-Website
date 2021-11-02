import React from "react";
import Layout from "../components/layout";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
const Resume = () => {
  return (
    <Layout>
      <Container className="py-5">
        <h1 className="text-center bg-dark text-primary">My Experience</h1>
        <Accordion defaultActiveKey="0" className="p-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body className="d-flex flex-wrap">
              <Container>
                <Row>
                  <p className="text-center">
                    <a
                      href="https://www.park.edu/"
                      style={{ color: "maroon", textDecoration: "none" }}
                    >
                      <h2>Park University</h2>
                    </a>
                    Graduated 2021
                    <br />
                    GPA: 3.94
                  </p>
                  <Col>
                    <h2>Bachelor's of Science</h2>
                    <p>Major: Software Engineering</p>
                  </Col>
                  <Col>
                    <a href="https://www.parchment.com/u/award/8b89d253cefb4523753fe5b16b3ab702">
                      <StaticImage
                        src="../images/networking-cert.jpg"
                        alt="Networking Certificate"
                        className="border border-dark border-2 my-2"
                      />
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Undergraduate Certificate</h2>
                    <p>Focus: Computer Networking</p>
                  </Col>
                  <Col>
                    <a href="https://www.parchment.com/u/award/9806430d082d67b7528b5168b5b6ca00">
                      <StaticImage
                        src="../images/bachelors-degree.jpg"
                        alt="Bachelors Degree"
                        className="border border-dark border-2 my-2"
                      />
                    </a>
                  </Col>
                </Row>
              </Container>
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
