import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Tags = ({ tags }) => {
  return (
    <Container className="tags">
      <Row className="justify-content-center" xs={2} md={3}>
        {tags.map((tag, index) => {
          return (
            <Col
              key={index}
              className="secondary-bg text-light p-2 m-1 rounded d-block text-truncate"
            >
              {tag}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Tags;
