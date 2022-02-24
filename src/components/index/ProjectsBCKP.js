import React, { useState } from "react";
import styled from "styled-components";
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

// renderModals = ({ projects }) => {};
export default function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="projectsSection" id="myProjects">
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      {/* Modal Start */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <iframe
            src="https://protik.me/zero-md.html?src=https://raw.githubusercontent.com/piedpipr/gradmate-app/main/README.md"
            width="100%"
            height="100%"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Git Repo
          </Button>
          <Button variant="primary" onClick={handleClose}>
            See Deployment
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Ends */}
      <SectionHeader>
        <SectionHeaderH1>My Projects</SectionHeaderH1>
      </SectionHeader>
      <div className="project-flex">
        {/* Section End */}
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task">
                <div className="task__tags">
                  <span className="task__tag task__tag--App">App</span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>GradMate - Android App</p>
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
        {/* Section End */}
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task">
                <div className="task__tags">
                  <span className="task__tag task__tag--Softwares">
                    Softwares
                  </span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Selenium Chromedriver Automation: Autotrader</p>
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
        {/* Section End */}
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task">
                <div className="task__tags">
                  <span className="task__tag task__tag--Web">Web</span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Gatsby React Portfolio Site</p>
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
        {/* Section End */}
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task">
                <div className="task__tags">
                  <span className="task__tag task__tag--Web">Web</span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Django Site UI</p>
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
        {/* Section End */}
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task">
                <div className="task__tags">
                  <span className="task__tag task__tag--Web">Web</span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Smart Leave Management System</p>
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
        {/* Section End */}
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task">
                <div className="task__tags">
                  <span className="task__tag task__tag--Softwares">
                    Softwares
                  </span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Kindle Ebook Thumbnail Fix</p>
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
    </div>
  );
}

const projects = [
  {
    key: "1",
    name: "Project 1",
    description: "This is a project",
    type: "Web",
    git: "",
    deployment: "",
  },
  {
    key: "2",
    name: "Project 2",
    description: "This is a project",
    type: "Web",
    git: "",
    deployment: "",
  },
  {
    key: "3",
    name: "Project 3",
    description: "This is a project",
    type: "Web",
    git: "",
    deployment: "",
  },
  {
    key: "4",
    name: "Project 4",
    description: "This is a project",
    type: "Web",
    git: "",
    deployment: "",
  },
  {
    key: "5",
    name: "Project 5",
    description: "This is a project",
    type: "Web",
    git: "",
    deployment: "",
  },
  {
    key: "6",
    name: "Project 6",
    description: "This is a project",
    type: "Web",
    git: "",
    deployment: "",
  },
];
