import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";

const SingleProject = ({ url, title, preview, tags, description }) => {
  const image = getImage(preview);
  return (
    <Container className="card my-3 h-100">
      <GatsbyImage image={image} alt={title} className="my-3" />
      <a href={url} className="link-primary text-decoration-none fs-4">
        {title}
      </a>
      <h5>{description}</h5>
      <h5>{tags}</h5>
    </Container>
  );
};

export default SingleProject;
