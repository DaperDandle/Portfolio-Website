import React from "react";
import SingleProject from "./singleProject";

import { Container, Row, Col } from "react-bootstrap";

const AllProjects = ({ projects }) => {
  return (
    <Container>
      <Row className="g-3">
        {projects.map((project) => {
          const {
            contentfulid,
            url,
            title,
            githubRepository,
            preview,
            tags: { tags },
            description: { description },
          } = project;
          return (
            <Col md={4} key={contentfulid}>
              <SingleProject
                id={contentfulid}
                url={url}
                title={title}
                preview={preview}
                tags={tags}
                description={description}
                githubRepository={githubRepository}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllProjects;
