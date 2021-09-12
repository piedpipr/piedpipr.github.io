import React, { useEffect } from "react";
import { Link } from "gatsby";
import $ from "jquery";
import jQuery from "jquery";
import "../styles/navbar.css";
const Navbar = () => {
  useEffect(() => {});
  return (
    <div style={{ textAlign: "left", zIndex: "1000" }}>
      <div
        style={{
          marginTop: "2vh",
          marginBottom: "5vh",
          marginLeft: "1vw",
          textShadow: "-2px 2px 7px gray",
        }}
      >
        <h1 style={{ fontWeight: 100 }}>
          piedpipr/
          <a style={{ fontWeight: 600 }}>PROTIK</a>
        </h1>
      </div>

      <section className="stageNav">
        <div id="home" className="divItem">
          <p id="homep" className="pNav">
            Blog
          </p>
        </div>
        <div className="divItem" id="about">
          <p className="pNav">Projects</p>
        </div>
        <div className="divItem" id="contact">
          <p className="pNav">Designs</p>
        </div>
        <div className="divItem" id="gallery">
          <p className="pNav">
            <Link to="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
