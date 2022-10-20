import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { FaEllipsisH } from "@react-icons/all-files/fa/FaEllipsisH";
import { FaCloudsmith } from "@react-icons/all-files/fa/FaCloudsmith";
import "../../styles/projects.css";

import kindleImage from "../../images/project-images/kindle-min.png";
import simplyblogImage from "../../images/project-images/springreact-min.png";
import recursionImage from "../../images/project-images/recursion-min.png";
import autotraderImage from "../../images/project-images/autotrader-min.jpg";
import bccImage from "../../images/project-images/bcc-min.png";
import gatsbyImage from "../../images/project-images/gatsby-min.png";
import gradmateImage from "../../images/project-images/gradmate-min.png";

import bccDoc from "../../docs/17BT8029_Protik Chanda_Internship Report.pdf";

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
    p0: false,
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
      p0: false,
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
      key: "p0",
      name: "SimplyBlog-react-springboot-fullstack-blog",
      description: "This is a personal project",
      image: simplyblogImage,
      type: "Web",
      tech: "spribgboot, reactjs, mysql, java, typescript",
      git: "https://github.com/piedpipr/SimplyBlog-react-springboot-blog",
      deployment: "https://simplyblog.vercel.app",
      md: "https://raw.githubusercontent.com/piedpipr/SimplyBlog-react-springboot-blog/main/README.md",
    },
    {
      key: "p1",
      name: "GradMate - Android App",
      description: "This is a project",
      image: gradmateImage,
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
      image: autotraderImage,
      type: "Software",
      tech: "python, selenium, chromedriver",
      git: "https://github.com/piedpipr/selenium-chromedriver-automation-autotrader",
      deployment: "",
      md: "https://raw.githubusercontent.com/piedpipr/selenium-chromedriver-automation-autotrader/main/README.md",
    },
    {
      key: "p3",
      name: "Gatsby React Portfolio Site",
      description: "This is a project",
      image: gatsbyImage,
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
      image: recursionImage,
      type: "Web",
      tech: "django, python",
      git: "https://github.com/piedpipr/RECursionNITD-website",
      deployment: "https://recursionnitd.in/",
      md: "",
      altext: "Please go the the live demo to see the deployed project at",
    },
    {
      key: "p5",
      name: "Smart Leave Management System",
      description: "Internship Project",
      image: bccImage,
      type: "Web",
      tech: "nodejs, mongodb, expressjs, hanlebars, passporjs",
      git: "https://github.com/piedpipr/bcc-smart-leave-system/",
      deployment: bccDoc,
      md: "",
      altext:
        "Please click the link for the detailed report of the project. Since the project is not public I am unable to show a demo",
    },
    {
      key: "p6",
      name: "Kindle Ebook Thumbnail Fix",
      description: "This is a project",
      image: kindleImage,
      type: "Software",
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
            {md ? (
              <iframe
                title="projects"
                src={`https://protik.me/zero-md.html?src=${md}`}
                width="100%"
                height="100%"
              />
            ) : (
              <div>
                <h1 style={{ color: "black" }}>
                  {project.altext}
                  <a href={project.deployment}> {project.deployment} </a>
                  <br />
                  <br />
                  <img
                    src={project.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      marginBottom: 4,
                      objectFit: "cover",
                      borderRadius: 5,
                    }}
                  />
                  <br />
                  Or go to github repo
                  <a href={project.deployment}> {project.git} </a>
                </h1>
              </div>
            )}
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
                <img
                  src={project.image}
                  style={{
                    width: "100%",
                    height: 100,
                    marginBottom: 4,
                    objectFit: "fill",
                    borderRadius: 5,
                  }}
                />
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
