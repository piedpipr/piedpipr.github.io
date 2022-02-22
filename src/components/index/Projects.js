import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "../../styles/projects.css";
const SectionHeader = styled.div`
  background-color: #5454696a;
  height: 10vh;
  margin-bottom: 2vh;
`;
const SectionHeaderH1 = styled.h1`
  color: white;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 1vw;
`;

export default function Projects() {
  const [state, setState] = useState({
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    p5: false,
    p6: false,
  });

  const changeHandler = (e) => {
    let newState = { ...state, [e]: true };
    setState(newState);
  };

  const Hide = () => {
    setState({
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      p5: false,
      p6: false,
    });
  };
  const projects = [
    {
      key: "p1",
      name: "GradMate - Android App",
      description: "This is a project",
      type: "App",
      git: "https://github.com/piedpipr/gradmate-app",
      deployment: "#",
      md: "https://raw.githubusercontent.com/piedpipr/gradmate-app/main/README.md",
    },
    {
      key: "p2",
      name: "Selenium Chromedriver Automation: Autotrader",
      description: "This is a project",
      type: "Software",
      git: "https://github.com/piedpipr/cg-trade-automation",
      deployment: "",
      md: "https://raw.githubusercontent.com/piedpipr/cg-trade-automation/main/README.md",
    },
    {
      key: "p3",
      name: "Gatsby React Portfolio Site",
      description: "This is a project",
      type: "Web",
      git: "https://github.com/piedpipr/piedpipr.github.io",
      deployment: "https://protik.me",
      md: "https://raw.githubusercontent.com/piedpipr/piedpipr.github.io/master/README.md",
    },
    {
      key: "p4",
      name: "Django Site UI",
      description: "This is a project",
      type: "Web",
      git: "https://github.com/piedpipr/RECursionNITD-website",
      deployment: "https://recursionnitd.in/",
      md: "",
    },
    {
      key: "p5",
      name: "Smart Leave Management System",
      description: "This is a project",
      type: "Web",
      git: "https://github.com/piedpipr/bcc-smart-leave-system/",
      deployment: "",
      md: "https://raw.githubusercontent.com/piedpipr/bcc-smart-leave-system/master/README.md",
    },
    {
      key: "p6",
      name: "Kindle Ebook Thumbnail Fix",
      description: "This is a project",
      type: "Web",
      git: "https://github.com/piedpipr/kindle-thumbnail-fix",
      deployment: "",
      md: "https://raw.githubusercontent.com/piedpipr/kindle-thumbnail-fix/main/README.md",
    },
  ];
  const items = projects.map((project) => {
    let key = project.key;
    let md = project.md;
    return (
      <div>
        {/* Modal Start */}
        <Modal show={state[key]} onHide={Hide}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <iframe
              title="projects"
              src={`https://protik.me/zero-md.html?src=${md}`}
              width="100%"
              height="100%"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={Hide}>
              Git Repo
            </Button>
            <Button variant="primary" onClick={Hide}>
              See Deployment
            </Button>
            <Button variant="secondary" onClick={Hide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Modal Ends */}
        <main className="project" onClick={(event) => changeHandler(key)}>
          <div className="project-tasks">
            <div className="project-column">
              <div className="task">
                <div className="task__tags">
                  <span className="task__tag task__tag--App">
                    {project.type}
                  </span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>{project.name}</p>
                <div className="task__stats">
                  <span>
                    <time datetime="2021-11-24T20:00:00">
                      <i className="fas fa-flag"></i>Nov 24
                    </time>
                  </span>
                  <span>
                    <i className="fas fa-comment"></i>3
                  </span>
                  <span>
                    <i className="fas fa-paperclip"></i>7
                  </span>
                  <span className="task__owner"></span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  });
  return (
    <div className="projectsSection" id="myProjects">
      <SectionHeader>
        <SectionHeaderH1>My Projects</SectionHeaderH1>
      </SectionHeader>
      <div className="project-flex">{items}</div>
    </div>
  );
}
