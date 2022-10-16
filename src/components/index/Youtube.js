import React from "react";
import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import youtubeImage from "../../images/youtubeold.png";

const SectionHeader = styled.div`
  background-color: #1e1e326a;
  height: 10vh;
  margin-bottom: 2vh;
`;
const SectionHeaderH1 = styled.h1`
  color: white;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 1vw;
`;

export default function Footer() {
  return (
    <div className="youtubeSection">
      <SectionHeader>
        <SectionHeaderH1>Youtube [Discontinued]</SectionHeaderH1>
        <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
          <img
            src={youtubeImage}
            style={{
              height: "70vh",
              width: "50vw",
              margin: "5%",
              borderRadius: 9,
            }}
          />
          <div
            style={{
              height: "70vh",
              width: "50vw",
              marginTop: "15%",
            }}
          >
            <h2
              style={{
                textAlign: "left",
              }}
            >
              This was my 1st ever attempt to Youtubing back in the High School
              in 2016, made only three videos and two with 100K+ views. Later on
              I could not continue. It was a fun project rather.
            </h2>
          </div>
        </div>
      </SectionHeader>
    </div>
  );
}
