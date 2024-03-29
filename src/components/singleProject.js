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
    <Container className="project-card my-3 h-100 justify-content-around">
      <div className="img-container my-3">
        <GatsbyImage image={image} alt={title} className="project-img" />
        <Tags tags={tags} />
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="link-light text-decoration-none fs-4"
      >
        {title}
      </a>
      <h5>{description}</h5>
      <div className="d-flex align-items-center py-3">
        <h5 className="m-3">Github Repository: </h5>
        <a href={githubRepository} className="link-light">
          <DiGithubAlt size={32} />
        </a>
      </div>
    </Container>
  );
};

export default SingleProject;
