import React from "react";
import resume from "../documents/resume.pdf";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegFilePdf } from "react-icons/fa";

const PdfDownload = () => {
  return (
    <Container className="card bg-white p-3 w-25 ms-5 primary-text">
      <Row className="align-items-center">
        <Col className="text-wrap">
          <h5>PDF Version</h5>
        </Col>
        <Col className="text-center">
          <a href={resume}>
            <FaRegFilePdf className="text-danger" size={32} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default PdfDownload;
