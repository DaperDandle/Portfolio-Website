import React from "react";
import { GiDiploma } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { MdGrade, MdWifi } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";

const Certificates = () => {
  return (
    <Container className="text-center">
      <Row className="py-3">
        <Col>
          <h3>Park University Suma Cum Laude</h3>
        </Col>
        <Col>
          <GiDiploma size={40} />
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          <h3>National Honors Society</h3>
        </Col>
        <Col>
          <FaUserGraduate size={40} />
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          <h3>Phi Theta Kappa Honors Society</h3>
        </Col>
        <Col>
          <MdGrade size={40} />
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          <h3>CCNA Curriculum Complete</h3>
        </Col>
        <Col>
          <MdWifi size={40} />
        </Col>
      </Row>
    </Container>
  );
};

export default Certificates;
