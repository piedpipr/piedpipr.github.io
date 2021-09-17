import React from "react";
import styled from "styled-components";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
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

const SectionHeader = styled.h1`
  color: white;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 1vw;
`;

export default function Designs() {
  const images = [
    // {
    //   src: `https://placedog.net/700/420?id=1`, // required
    //   srcset: `https://placedog.net/400/240?id=1 400w, https://placedog.net/700/420?id=1 700w, https://placedog.net/1000/600?id=1 1000w`,
    //   sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    //   alt: `Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.`,
    //   thumbnail: `https://placedog.net/100/60?id=1`,
    // },
    {
      src: image1, // required
      thumbnail: image1thumb,
    },
    {
      src: image2, // required
      thumbnail: image2thumb,
    },
    {
      src: image3, // required
      thumbnail: image3thumb,
    },
    {
      src: image4, // required
      thumbnail: image4thumb,
    },
    {
      src: image5, // required
      thumbnail: image5thumb,
    },
    {
      src: image6, // required
      thumbnail: image6thumb,
    },
    {
      src: image7, // required
      thumbnail: image7thumb,
    },
    {
      src: image8, // required
      thumbnail: image8thumb,
    },
    {
      src: image9, // required
      thumbnail: image9thumb,
    },
  ];
  return (
    <div className="designsSection" id="myDesigns">
      <div>
        <SectionHeader>Designs and Edits</SectionHeader>
      </div>
      <Carousel
        objectFit="contain"
        images={images}
        style={{ maxHeight: "90vh", width: "auto", backgroundColor: "#f7f9fc" }}
      />
    </div>
  );
}
