import React from "react";
import { useState } from "react";
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
  const [showTags, setShowTags] = useState(false);
  const image = getImage(preview);
  return (
    <Container className="card my-3 h-100 d-flex flex-column justify-content-around">
      <GatsbyImage
        image={image}
        alt={title}
        className="my-3"
        style={{ height: "40%" }}
        onMouseEnter={() => setShowTags(true)}
        onMouseLeave={() => setShowTags(false)}
      />
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

      {showTags && <Tags tags={tags} />}
    </Container>
  );
};

export default SingleProject;
