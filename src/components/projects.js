import React from "react";
import { graphql } from "gatsby";

const projects = () => {
  return <div></div>;
};

graphql`
  {
    allContentfulProject {
      nodes {
        id
        url
        title
        contentfulid
        preview {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        tags {
          tags
        }
        description {
          description
        }
      }
    }
  }
`;

export default projects;
