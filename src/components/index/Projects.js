import React from "react";
import styled from "styled-components";
const SectionHeader = styled.h1`
  color: white;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 1vw;
`;
export default function Projects() {
  return (
    <div className="projectsSection" id="myProjects">
      <div>
        <SectionHeader>My Projects</SectionHeader>
      </div>
    </div>
  );
}
