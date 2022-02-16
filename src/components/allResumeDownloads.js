import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "react-bootstrap";
import ResumeDownload from "./resumeDownload";

const AllResumeDownloads = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { in: ["pdf", "docx"] } }) {
        nodes {
          publicURL
        }
      }
    }
  `);
  return (
    <Container className="d-flex justify-content-between">
      {data.allFile.nodes.map((item, index) => {
        let version;
        if (index === 0) {
          version = "Word";
        } else {
          version = "PDF";
        }
        return (
          <ResumeDownload
            version={version}
            resume={item.publicURL}
            key={index}
          />
        );
      })}
    </Container>
  );
};

export default AllResumeDownloads;
