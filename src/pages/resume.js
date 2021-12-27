import React from "react";
import Layout from "../components/layout";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import TechLogos from "../components/techLogos";
import Certificates from "../components/certificates";
import PdfDownload from "../components/pdfDownload";
const Resume = () => {
  return (
    <Layout>
      <Container className="py-5">
        <h1 className="text-center bg-primary text-white rounded">
          My Experience
        </h1>
        <Accordion defaultActiveKey="0" className="p-5 fs-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3>Education</h3>
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-wrap">
              <Container>
                <Row className="border-bottom border-primary mb-3 pb-3">
                  <div className="text-center p-2">
                    <a href="https://www.park.edu/" className="park-link">
                      <h2>Park University</h2>
                    </a>
                    Graduated 2021
                    <br />
                    GPA: 3.94
                  </div>
                  <Col md>
                    <h2>Bachelor's of Science</h2>
                    <p>Major: Software Engineering</p>
                  </Col>
                  <Col md>
                    <a href="https://www.parchment.com/u/award/8b89d253cefb4523753fe5b16b3ab702">
                      <StaticImage
                        src="../images/bachelors-degree.jpg"
                        alt="Bachelors degree"
                        className="border border-dark border-2 my-2"
                      />
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <h2>Undergraduate Certificate</h2>
                    <p>Focus: Computer Networking</p>
                  </Col>
                  <Col md>
                    <a href="https://www.parchment.com/u/award/9806430d082d67b7528b5168b5b6ca00">
                      <StaticImage
                        src="../images/networking-cert.jpg"
                        alt="Networking Certificate"
                        className="border border-dark border-2 my-2"
                      />
                    </a>
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3>Work Experience</h3>
            </Accordion.Header>
            <Accordion.Body>
              <Container>
                <Row>
                  <Col md>
                    <h3>Guitar Center</h3>
                    <p>
                      Dates Worked: 2013-Present
                      <br />
                      Address: 4001 N. Norfleet Rd. Kansas City, MO 64116 Phone
                      Number: 816-423-5800
                    </p>
                    <StaticImage
                      src="../images/gc-logo.jpg"
                      alt="Guitar Center Logo"
                    />
                  </Col>
                  <Col md>
                    <div>
                      <h4>Position: PSI Utility Associate</h4>
                      2017-Present
                    </div>
                    <div>
                      Duties:
                      <br />
                      <ul>
                        <li>Inventory Management</li>
                        <li>Inbound Inventory Inspection</li>
                        <li>Order Fullfillment</li>
                        <li>Customer Service</li>
                      </ul>
                    </div>
                    <div>
                      <h4>Position: Bulk Shipping Associate</h4>
                      2013-2017
                    </div>
                    <div>
                      Duties:
                      <br />
                      <ul>
                        <li>Order Shippment</li>
                        <li>Power Equipment Operation</li>
                        <li>Material Handling</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h3>Technology Experience</h3>
            </Accordion.Header>
            <Accordion.Body>
              <Container className="text-center">
                <h3>Some of my Favorite Tools:</h3>
                <TechLogos />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3>Honors and Certifications</h3>
            </Accordion.Header>
            <Accordion.Body>
              <Container className="d-flex align-items-center">
                <Certificates />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <PdfDownload />
      </Container>
    </Layout>
  );
};

export default Resume;
