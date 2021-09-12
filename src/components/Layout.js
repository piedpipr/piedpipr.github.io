import React from "react";
import Header from "./Header";
import Posts from "./Posts";
import Footer from "./Footer";
import "../styles/global.css";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <Posts />
      <div style={{ textAlign: "left", zIndex: "100" }}>{props.children}</div>
      <Footer />
    </div>
  );
}
