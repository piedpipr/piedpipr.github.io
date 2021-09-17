import React from "react";
import styled from "styled-components";
import "../../styles/projects.css";
const SectionHeader = styled.h1`
  color: white;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 1vw;
`;
export default function Projects() {
  return (
    <div className="projectsSection" id="myProjects">
      <SectionHeader>My Projects</SectionHeader>
      <div className="project-flex">
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task" draggable="true">
                <div className="task__tags">
                  <span className="task__tag task__tag--App">App</span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Konsep hero title yang menarik</p>
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
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task" draggable="true">
                <div className="task__tags">
                  <span className="task__tag task__tag--Web">Web</span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Konsep hero title yang menarik</p>
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
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task" draggable="true">
                <div className="task__tags">
                  <span className="task__tag task__tag--Softwares">
                    Softwares
                  </span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Konsep hero title yang menarik</p>
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
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task" draggable="true">
                <div className="task__tags">
                  <span className="task__tag task__tag--Softwares">
                    Softwares
                  </span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Konsep hero title yang menarik</p>
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
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task" draggable="true">
                <div className="task__tags">
                  <span className="task__tag task__tag--Softwares">
                    Softwares
                  </span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Konsep hero title yang menarik</p>
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
        <main className="project">
          <div className="project-tasks">
            <div className="project-column">
              <div className="task" draggable="true">
                <div className="task__tags">
                  <span className="task__tag task__tag--Softwares">
                    Softwares
                  </span>
                  <button className="task__options">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <p>Konsep hero title yang menarik</p>
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
