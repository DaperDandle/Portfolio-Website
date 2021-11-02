import React from "react";
import { useState } from "react";
import SingleProject from "./singleProject";

import { Container, Row, Col } from "react-bootstrap";

const AllProjects = ({ data, tags }) => {
  const [projects, setProjects] = useState(data.allContentfulProject.nodes);
  const [selectedTag, setSelectedTag] = useState("all-projects");

  return (
    <Container>
      <div className="text-primary bg-dark p-2 w-25">
        <label htmlFor="projectFilter" className="me-2">
          Filter By Project Tags:
        </label>
        <select
          name="projectFilter"
          id="projectFilter"
          value={selectedTag}
          onChange={(e) => {
            setSelectedTag(e.target.value);
          }}
        >
          {[...tags].map((tag) => {
            return <option value={tag}>{tag}</option>;
          })}
        </select>
        <button
          className=" ms-2 text-dark btn btn-primary"
          onClick={() => {
            const newProjects = projects.filter((project) => {
              return project.tags.tags.indexOf(selectedTag) > -1;
            });
            setProjects(newProjects);
          }}
        >
          Filter
        </button>
      </div>

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
