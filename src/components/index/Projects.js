import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { FaEllipsisH } from "@react-icons/all-files/fa/FaEllipsisH";
import { FaCloudsmith } from "@react-icons/all-files/fa/FaCloudsmith";
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
    status: false,
  });
  const changeHandler = (e) => {
    let newState = { ...state, [e]: true };
    setState(newState);
  };

  const Hide = (e) => {
    let newState = {
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      p5: false,
      p6: false,
      status: true,
    };
    setState(newState);
  };
  // useEffect(() => {
  //   if (state.status === true) {
  //     let newState = {
  //       p1: false,
  //       p2: false,
  //       p3: false,
  //       p4: false,
  //       p5: false,
  //       p6: false,
  //       status: false,
  //     };
  //     setState(newState);
  //     window.location = `#myProjects`;
  //   }
  // });
  const projects = [
    {
      key: "p1",
      name: "GradMate - Android App",
      description: "This is a project",
      type: "App",
      tech: "react-native, android, firebase, javascript",
      git: "https://github.com/piedpipr/gradmate-app",
      deployment: "#",
      md: "https://raw.githubusercontent.com/piedpipr/gradmate-app/main/README.md",
    },
    {
      key: "p2",
      name: "Selenium Chromedriver Automation: Autotrader",
      description: "This is a project",
      type: "Software",
      tech: "python, selenium, chromedriver",
      git: "https://github.com/piedpipr/cg-trade-automation",
      deployment: "",
      md: "https://raw.githubusercontent.com/piedpipr/cg-trade-automation/main/README.md",
    },
    {
      key: "p3",
      name: "Gatsby React Portfolio Site",
      description: "This is a project",
      type: "Web",
      tech: "gatsbyjs, reactjs, javascript",
      git: "https://github.com/piedpipr/piedpipr.github.io",
      deployment: "https://protik.me",
      md: "https://raw.githubusercontent.com/piedpipr/piedpipr.github.io/master/README.md",
    },
    {
      key: "p4",
      name: "Django Site UI",
      description: "This is a project",
      type: "Web",
      tech: "django, python",
      git: "https://github.com/piedpipr/RECursionNITD-website",
      deployment: "https://recursionnitd.in/",
      md: "",
    },
    {
      key: "p5",
      name: "Smart Leave Management System",
      description: "This is a project",
      type: "Web",
      tech: "nodejs, mongodb, expressjs, hanlebars, passporjs",
      git: "https://github.com/piedpipr/bcc-smart-leave-system/",
      deployment: "",
      md: "https://raw.githubusercontent.com/piedpipr/bcc-smart-leave-system/master/README.md",
    },
    {
      key: "p6",
      name: "Kindle Ebook Thumbnail Fix",
      description: "This is a project",
      type: "Web",
      tech: "python, qt4",
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
        <Modal show={state[key]} onHide={(event) => Hide()}>
          <Modal.Header closeButton>
            <span className="text-dark">
              It may take a moment to load, refresh if needed
            </span>
          </Modal.Header>
          <Modal.Body>
            <iframe
              title="projects"
              src={`https://protik.me/zero-md.html?src=${md}`}
              width="100%"
              height="100%"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={(event) => window.open(project.git, "_blank")}
            >
              Git Repo
            </Button>
            <Button
              variant="primary"
              onClick={(event) => window.open(project.deployment, "_blank")}
            >
              See Deployment
            </Button>
            <Button variant="secondary" onClick={(event) => Hide()}>
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
                  {project.type == "App" ? (
                    <span className="task__tag task__tag--App">
                      {project.type}
                    </span>
                  ) : null}
                  {project.type == "Web" ? (
                    <span className="task__tag task__tag--Web">
                      {project.type}
                    </span>
                  ) : null}
                  {project.type == "Software" ? (
                    <span className="task__tag task__tag--Softwares">
                      {project.type}
                    </span>
                  ) : null}

                  <button className="task__options">
                    <FaEllipsisH />
                  </button>
                </div>
                <p>{project.name}</p>
                <div className="task__stats">
                  <span>
                    <FaCloudsmith />
                  </span>
                  <span>{project.tech}</span>
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
