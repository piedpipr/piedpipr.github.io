import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Navbar from "./Navbar";
import "../../styles/headerbg.css";

export default function Background(props) {
  useEffect(() => {
    // Reveal

    const tl = gsap.timeline();

    tl.from(".quote-line span", {
      y: 200,
      skewY: 10,
      duration: 1.8,
      ease: "power4.out",
      stagger: 0.1,
    });

    tl.from(
      ".quote-caption",
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "power4.out",
      },
      "-=1"
    );

    tl.from(
      ".circle",
      {
        scale: 0,
        duration: 1.2,
        ease: "elastic.out(2, 1)",
        stagger: -0.1,
      },
      "-=1"
    );

    // Parallax

    // const layers = document.querySelectorAll(".layer");
    // const speeds = [2, 1, 0.5, 0.25];

    // const parallaxEffect = (e) => {
    //   const positionX = e.clientX - Math.floor(window.innerWidth / 2);
    //   const positionY = e.clientY - Math.floor(window.innerHeight / 2);

    //   layers.forEach((layer, i) => {
    //     gsap.to(layer, {
    //       translateX: positionX * (speeds[i] / 100),
    //       translateY: positionY * (speeds[i] / 100),
    //     });
    //   });
    // };

    // document.addEventListener("mousemove", parallaxEffect);
  });

  return (
    <div className="headerSection">
      <Navbar />
      <div className="reveal">
        <div className="quote">
          <div className="quote-line">
            <span>A Journey of a Thousand Miles</span>
          </div>
          <div className="quote-line">
            <span>Begins with a Single Step</span>
          </div>

          <span className="quote-caption">
            A rather erratic journey to the unknown
          </span>
        </div>
      </div>

      <div className="parallax">
        <div className="layer">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="layer">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="layer">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="layer">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
