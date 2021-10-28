import React from "react";
import { Container } from "react-bootstrap";

const Tags = ({ tags }) => {
  return (
    <>
      <h5>Tags:</h5>
      <Container className="d-flex flex-wrap justify-content-around">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="bg-light p-2 m-1 rounded d-block">
              {tag}
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Tags;
