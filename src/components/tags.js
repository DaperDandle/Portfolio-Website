import React from "react";
import { Container } from "react-bootstrap";
const Tags = ({ tags }) => {
  return (
    <Container className="d-flex justify-content-between">
      {tags.map((tag, index) => {
        return (
          <div key={index} className="bg-light p-1">
            {tag}
          </div>
        );
      })}
    </Container>
  );
};

export default Tags;
