import React from "react";
import styled from "styled-components";
import image1 from "../../images/designs/portfolio-01-large.jpg";
import image2 from "../../images/designs/portfolio-02-large.jpg";
import image3 from "../../images/designs/portfolio-03-large.jpg";
import image4 from "../../images/designs/portfolio-04-large.jpg";
import image5 from "../../images/designs/portfolio-05-large.jpg";
import image6 from "../../images/designs/portfolio-06-large.jpg";
import image7 from "../../images/designs/portfolio-07-large.jpg";
import image8 from "../../images/designs/portfolio-08-large.jpg";
import image9 from "../../images/designs/portfolio-09-large.jpg";

import image1thumb from "../../images/designs/portfolio-01-thumbnail.jpg";
import image2thumb from "../../images/designs/portfolio-02-thumbnail.jpg";
import image3thumb from "../../images/designs/portfolio-03-thumbnail.jpg";
import image4thumb from "../../images/designs/portfolio-04-thumbnail.jpg";
import image5thumb from "../../images/designs/portfolio-05-thumbnail.jpg";
import image6thumb from "../../images/designs/portfolio-06-thumbnail.jpg";
import image7thumb from "../../images/designs/portfolio-07-thumbnail.jpg";
import image8thumb from "../../images/designs/portfolio-08-thumbnail.jpg";
import image9thumb from "../../images/designs/portfolio-09-thumbnail.jpg";

const images = [
  // {
  //   src: `https://placedog.net/700/420?id=1`, // required
  //   srcset: `https://placedog.net/400/240?id=1 400w, https://placedog.net/700/420?id=1 700w, https://placedog.net/1000/600?id=1 1000w`,
  //   sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
  //   alt: `Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.`,
  //   thumbnail: `https://placedog.net/100/60?id=1`,
  // },
  {
    id: 1,
    src: image1, // required
    thumbnail: image1thumb,
  },
  {
    id: 2,
    src: image2, // required
    thumbnail: image2thumb,
  },
  {
    id: 3,
    src: image3, // required
    thumbnail: image3thumb,
  },
  {
    id: 4,
    src: image4, // required
    thumbnail: image4thumb,
  },
  {
    id: 5,
    src: image5, // required
    thumbnail: image5thumb,
  },
  {
    id: 6,
    src: image6, // required
    thumbnail: image6thumb,
  },
  {
    id: 7,
    src: image7, // required
    thumbnail: image7thumb,
  },
  {
    id: 8,
    src: image8, // required
    thumbnail: image8thumb,
  },
  {
    id: 9,
    src: image9, // required
    thumbnail: image9thumb,
  },
];
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  max-width: 100%;
  margin: auto;
  padding: 3%;

  > * {
    padding: 0.5em;
    flex-basis: 100%;
    max-width: 100%;
  }
  @media (min-width: 54em) {
    > * {
      flex-basis: 33.3333333333%;
      max-width: 33.3333333333%;
    }
  }
`;
const ImageEach = styled.img`
  max-width: 50%;
  width: 25%;
  object-fit: cover;
  border-radius: 20px;
  @media (min-width: 1000px) {
    max-width: 25%;
  }
`;
const SectionHeader = styled.div`
  background-color: #2828396a;
  height: 10vh;
  margin-bottom: 2vh;
`;
const SectionHeaderH1 = styled.h1`
  color: white;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 1vw;
`;

export default function Designs() {
  return (
    <div className="designsSection" id="myDesigns">
      <SectionHeader>
        <SectionHeaderH1>Designs and Edits</SectionHeaderH1>
      </SectionHeader>
      <ImgContainer>
        {images.map((item) => (
          <ImageEach key={item.id} src={item.src} />
        ))}
      </ImgContainer>
    </div>
  );
}
