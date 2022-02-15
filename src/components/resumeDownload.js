import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegFilePdf, FaRegFileWord } from "react-icons/fa";

const ResumeDownload = ({ resume, version }) => {
  console.log(resume);
  return (
    <Container className="card bg-white p-3 w-25 primary-text">
      <Row className="align-items-center">
        <Col className="text-wrap text-center">
          <h5>{version} Version</h5>
        </Col>
        <Col className="text-center">
          <a href={resume} download>
            {version === "PDF" ? (
              <FaRegFilePdf className="text-danger" size={32} />
            ) : (
              <FaRegFileWord className="text-primary" size={32} />
            )}
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumeDownload;
