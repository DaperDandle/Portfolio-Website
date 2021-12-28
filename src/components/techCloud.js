import React, { useState } from "react";
import SingleProject from "../components/singleProject";
import { Container, Row, Col } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { SiGatsby } from "react-icons/si";

const TechCloud = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container className="text-white h-100 d-flex align-items-center justify-content-center">
      <Row>
        <Col
          onMouseEnter={() => setShowModal(true)}
          onMouseOut={() => setShowModal(false)}
        >
          <FaReact size={100} />
          {showModal && <SingleProject />}
        </Col>
        <Col>
          <SiGatsby size={100} />
          {showModal && <SingleProject />}
        </Col>
      </Row>
    </Container>
  );
};

export default TechCloud;
