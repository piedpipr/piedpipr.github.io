import React from "react";
import styled from "styled-components";
import mypic from "../../images/designs/portfolio-08-large.jpg";
const SectionHeader = styled.div`
  background-color: #24243c;
  height: 10vh;
  margin-bottom: 2vh;
`;
const SectionHeaderH1 = styled.h1`
  color: white;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 1vw;
`;
const MyPhoto = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 150px;
  display: block;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
`;
export default function About() {
  return (
    <div className="aboutSection" id="aboutMe">
      <SectionHeader>
        <SectionHeaderH1>About Myself</SectionHeaderH1>
      </SectionHeader>
      <MyPhoto src={mypic} />
      <h2
        style={{
          color: "black",
          display: "block",
          marginTop: "3vh",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        Protik Chanda
      </h2>
      <h5
        style={{ fontSize: 15, fontWeight: 500, color: "black", padding: "7%" }}
      >
        I am a learner first, I fell in love with web technology and books in my
        early years. Currently I am a fresh B.Tech graduate from National
        Institute of Technology Durgapur, India. I love developing websites and
        their UX/UI and occationally do some designs in Photoshop and
        Illustrator. I also like taking nature photos, playing guitar, doing
        public speaking and writing sometimes. For me everyday is like a new
        opportunity to try something new, but life gets busy and messy
        sometimes.{"\n"}
        In personal life if you call it destination or something like landmark
        or goal, for me it would be travelling the world and then living in a
        peaceful countryside.
      </h5>
    </div>
  );
}
