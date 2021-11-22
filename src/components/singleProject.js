import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import { DiGithubAlt } from "react-icons/di";
import Tags from "./tags";

const SingleProject = ({
  url,
  title,
  preview,
  tags,
  description,
  githubRepository,
}) => {
  const image = getImage(preview);
  return (
    <Container className="card my-3 h-100 d-flex flex-column justify-content-around">
      <div className="img-container my-3">
        <GatsbyImage image={image} alt={title} className="project-img" />
        <Tags tags={tags} />
      </div>
      <a href={url} className="link-primary text-decoration-none fs-4">
        {title}
      </a>
      <h5>{description}</h5>
      <div className="d-flex py-3">
        <h5 className="me-5">Github Repository: </h5>
        <a href={githubRepository}>
          <DiGithubAlt size={32} />
        </a>
      </div>
    </Container>
  );
};

export default SingleProject;
