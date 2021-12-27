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
          <SiHtml5 size={32} />
          <p>HTML 5</p>
        </Col>

        <Col>
          <SiCss3 size={32} />
          <p>CSS 3</p>
        </Col>

        <Col>
          <SiJavascript size={32} />
          <p>ES6</p>
        </Col>

        <Col>
          <SiReact size={32} />
          <p>React Js</p>
        </Col>

        <Col>
          <SiGatsby size={32} />
          <p>Gatsby Js</p>
        </Col>

        <Col>
          <SiBootstrap size={32} />
          <p>Bootstrap</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TechLogos;
