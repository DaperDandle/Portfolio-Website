import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Tags = ({ tags }) => {
  return (
    <Container className="py-3">
      <h5 className="pb-3">Tags:</h5>
      <Row className="justify-content-center" xs={1} md={3}>
        {tags.map((tag, index) => {
          return (
            <Col
              key={index}
              className="bg-light p-2 m-1 rounded d-block text-truncate"
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
