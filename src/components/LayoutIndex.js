import React, { useEffect } from "react";
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";
import $ from "jquery";
import Header from "./index/Header";
import Posts from "./index/Posts";
import Projects from "./index/Projects";
import Designs from "./index/Designs";
import About from "./index/About";
import Footer from "./index/Footer";
import "../styles/global.css";

export default function LayoutIndex(props) {
  useEffect(
    () => {
      /////////////////////////
      var btn = $("#buttonUp");

      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });

      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
      });
    }
    ///////////////////////////
  );
  return (
    <div style={{ marginTop: "0px", paddingTop: "0px" }}>
      <Header />
      <section>{props.children}</section>
      <Posts />
      <Projects />
      <Designs />
      <About />
      <Footer />
      <a id="buttonUp">
        <h2>
          <FaAngleUp style={{ width: "1em", height: "2em" }} />
        </h2>
      </a>
    </div>
  );
}
