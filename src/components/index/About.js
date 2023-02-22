import React from "react";
import styled from "styled-components";
import mypic from "../../images/mypicmain.jpg";
import PROTIK_CHANDA_RESUME_SWE from "../../resumes/PROTIK_CHANDA_RESUME_SWE.pdf";
import PROTIK_CHANDA_RESUME_BT from "../../resumes/PROTIK_CHANDA_RESUME_BT.pdf";
import PROTIK_CHANDA_RESUME_BT_ACADEMIC from "../../resumes/PROTIK_CHANDA_RESUME_BT_ACADEMIC.pdf";
import PROTIK_CHANDA_RESUME_CS_ACADEMIC from "../../resumes/PROTIK_CHANDA_RESUME_CS.pdf";

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
          padding: "1%",
          marginTop: "4vh",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        Protik Chanda
      </h2>
      <a href={PROTIK_CHANDA_RESUME_CS_ACADEMIC}>
        <p
          style={{
            color: "black",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          View Resume
        </p>
      </a>
      <h5
        style={{
          fontFamily: "",
          fontSize: 16,
          fontWeight: 385,
          color: "GrayText",
          padding: "5%",
        }}
      >
        Hello there, I am Protik Chanda, a tech enthusiast with a keen interest
        in computers, softwares, communication, well-being, education and
        innovation of any type overall. I have completed my degree of Bachelor
        of Technology (B.Tech) from National Institute of Technology Durgapur,
        WB, India. I have decided to build my career in R&D and Tech, possibly
        in AI and Software Industry. {/*Currently I am looking for research
        opportunities in Bioinformatics, ML/Deep Learning, eHealth and Human
        Centric (Health, Fitness, Behaviours, Cognition or Social) Computing .
        On the other hand HCI, eHealth and ML/DeepLearning realted studies
        are three of my academic interests for possible research.
         and with possible application of
        Software Engineering and ML, meanwhile I am also seeking immediate
        opportunity to join a company and gather hands-on industry experiences
        to advance mhy career.  */}
        I love learning and exploring new things everyday. I develop softwares
        for fun and situational demands, and did some occasional designs too. In
        spare time I enjoy practicing guitar(can't say a player yet!), listening
        to music, binge watching, reading books or occasionally writing and
        taking photographs. Despite everything, life is never easy, so I am
        always trying to improve myself physically and mentally. Travelling and
        exploration is something I am looking forward in upcoming days.
        {/* I am a learner first, I fell in love with web technology and books in my
        early years. Currently I am a fresh B.Tech graduate from National
        Institute of Technology Durgapur, India. I love developing websites and
        their UX/UI and occationally do some designs in Photoshop and
        Illustrator. I also like taking nature photos, playing guitar, doing
        public speaking and writing sometimes. For me everyday is like a new
        opportunity to try something new, but life gets busy and messy
        sometimes.{"\n"}
        In personal life if you call it destination or something like landmark
        or goal, for me it would be travelling the world and then living in a
        peaceful countryside. */}
      </h5>
      <div id="myPublication">
        <h2
          style={{
            color: "black",
            display: "block",
            padding: "1%",
            marginTop: "4vh",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          Publication
        </h2>
        <h5
          style={{
            fontFamily: "",
            fontSize: 16,
            fontWeight: 385,
            color: "GrayText",
            padding: "5%",
          }}
        >
          1. Mandal, D.D., Singh, G., Majumdar, S., <b>Chanda, P.</b> Challenges
          in developing strategies for the valorization of lignin—a major
          pollutant of the paper mill industry. Environ Sci Pollut Res (2022).
          <a href="https://doi.org/10.1007/s11356-022-24022-4">
            https://doi.org/10.1007/s11356-022-24022-4
          </a>
        </h5>
        <h2
          style={{
            color: "black",
            display: "block",
            padding: "1%",
            marginTop: "4vh",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        ></h2>
      </div>
    </div>
  );
}
