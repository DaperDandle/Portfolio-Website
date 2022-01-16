import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiGatsby,
  SiBootstrap,
  SiVisualstudiocode,
  SiSass,
  SiGit,
} from "react-icons/si";

const TechLogos = () => {
  return (
    <Container className="text-center fs-5">
      <Row md={3} xs={2}>
        <Col>
          <SiHtml5 size={32} className="movement" />
          <p className="text-white">HTML 5</p>
        </Col>

        <Col>
          <SiCss3 size={32} className="movement" />
          <p className="text-white">CSS 3</p>
        </Col>

        <Col>
          <SiJavascript size={32} className="movement" />
          <p className="text-white">ES6</p>
        </Col>

        <Col>
          <SiReact size={32} className="movement" />
          <p className="text-white">React Js</p>
        </Col>

        <Col>
          <SiGatsby size={32} className="movement" />
          <p className="text-white">Gatsby Js</p>
        </Col>

        <Col>
          <SiBootstrap size={32} className="movement" />
          <p className="text-white">Bootstrap</p>
        </Col>

        <Col>
          <SiVisualstudiocode size={32} className="movement" />
          <p className="text-white">Visual Studio Code</p>
        </Col>

        <Col>
          <SiSass size={32} className="movement" />
          <p className="text-white">Sass</p>
        </Col>

        <Col>
          <SiGit size={32} className="movement" />
          <p className="text-white">Git</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TechLogos;
