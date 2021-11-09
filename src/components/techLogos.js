import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiGatsby,
  SiBootstrap,
} from "react-icons/si";

const TechLogos = () => {
  return (
    <Container className="text-center fs-5">
      <Row md={3} xs={2}>
        <Col>
          <SiHtml5 className="text-primary" size={32} />
          <p>HTML 5</p>
        </Col>

        <Col>
          <SiCss3 className="text-danger" size={32} />
          <p>CSS 3</p>
        </Col>

        <Col>
          <SiJavascript className="text-warning" size={32} />
          <p>ES6</p>
        </Col>

        <Col>
          <SiReact className="text-info" size={32} />
          <p>React Js</p>
        </Col>

        <Col>
          <SiGatsby style={{ color: "purple" }} size={32} />
          <p>Gatsby Js</p>
        </Col>

        <Col>
          <SiBootstrap style={{ color: "indigo" }} size={32} />
          <p>Bootstrap</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TechLogos;
