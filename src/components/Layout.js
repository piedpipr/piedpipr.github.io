import React from "react";
import Header from "./Header";
import Posts from "./Posts";
import Projects from "./Projects";
import Designs from "./Designs";
import Footer from "./Footer";
import "../styles/global.css";
import About from "./About";

export default function Layout(props) {
  return (
    <div style={{ marginTop: "0px", paddingTop: "0px" }}>
      <Header />
      <Posts />
      <Projects />
      <Designs />
      <About />
      <Footer />
    </div>
  );
}
