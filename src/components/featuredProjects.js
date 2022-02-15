import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SingleProject from "./singleProject";
import { Container, Row, Col } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { SiGatsby } from "react-icons/si";

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProject(filter: { tags: { tags: { in: "featured" } } }) {
        nodes {
          title
          contentful_id
          url
          githubRepository
          preview {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
          description {
            description
          }
          tags {
            tags
          }
        }
      }
    }
  `);
  const projects = data.allContentfulProject.nodes;

  const gatsbyProject = projects.filter((project) =>
    project.tags.tags.includes("gatsby")
  );

  const gatsbyObj = Object.assign({}, ...gatsbyProject);

  const reactProject = projects.filter((project) =>
    project.tags.tags.includes("react")
  );

  const reactObj = Object.assign({}, ...reactProject);

  return (
    <Container className="w-75 mx-auto h-100 ">
      <Row className="text-center">
        <Col>
          <FaReact size={100} />
        </Col>
        <Col>
          <SiGatsby size={100} />
        </Col>
      </Row>
      <Row>
        <Col>
          <SingleProject
            url={reactObj.url}
            title={reactObj.title}
            preview={reactObj.preview}
            description={reactObj.description.description}
            githubRepository={reactObj.githubRepository}
            tags={reactObj.tags.tags}
          />
        </Col>

        <Col>
          <SingleProject
            url={gatsbyObj.url}
            title={gatsbyObj.title}
            preview={gatsbyObj.preview}
            description={gatsbyObj.description.description}
            githubRepository={gatsbyObj.githubRepository}
            tags={gatsbyObj.tags.tags}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedProjects;
