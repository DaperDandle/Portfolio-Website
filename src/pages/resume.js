import React from "react";
import Layout from "../components/layout";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Job from "../components/job";
import SEO from "../components/SEO";
import Certificates from "../components/certificates";
import ResumeDownload from "../components/resumeDownload";
const Resume = () => {
  return (
    <Layout>
      <SEO title="Resume"></SEO>
      <Container className="py-5">
        <Accordion defaultActiveKey="0" className="p-5  fs-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="secondary-bg">
              <h3>Education</h3>
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-wrap primary-text secondary-bg">
              <Container>
                <Row className="border-bottom border-dark mb-3 pb-3">
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
            <Accordion.Body className="primary-text secondary-bg">
              <Container>
                <Row>
                  <Col lg className="m-3">
                    <h3>Guitar Center</h3>
                    <p>
                      Dates Worked: 2013-Present
                      <br />
                      Address: 4001 N. Norfleet Rd. Kansas City, MO 64116
                      <br />
                      Phone Number: 816-423-5800
                    </p>
                    <StaticImage
                      src="../images/gc-logo.jpg"
                      alt="Guitar Center Logo"
                    />
                  </Col>
                  <Col lg className="m-3">
                    <Job
                      position="PRG Returns Technician"
                      dates="2021-Present"
                      duties={[
                        "Researching Return Information",
                        "Inventory Inspection",
                        "Defect Diagnosis",
                        "Instrument Setup and Repair",
                      ]}
                    />
                    <hr />
                    <Job
                      position="PSI Utility Associate"
                      dates="2017-2021"
                      duties={[
                        "Inventory Management",
                        "Inbound Inventory Inspection",
                        "Order Fullfillment",
                        "Customer Service",
                      ]}
                    />
                    <hr />
                    <Job
                      position="Bulk Shipping Associate"
                      dates="2013-2017"
                      duties={[
                        "Order Shippment",
                        "Power Equipment Operation",
                        "Material Handling",
                      ]}
                    />
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3>Honors and Certifications</h3>
            </Accordion.Header>
            <Accordion.Body className="primary-text secondary-bg">
              <Container className="d-flex align-items-center">
                <Certificates />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Container className="d-flex justify-content-between">
          <ResumeDownload resume="../documents/Pdf-Resume.pdf" version="PDF" />
          <ResumeDownload
            resume="../documents/Word-Resume.docx"
            version="Word"
          />
        </Container>
      </Container>
    </Layout>
  );
};

export default Resume;
