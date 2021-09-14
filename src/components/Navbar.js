import React, { useEffect } from "react";
import { Link } from "gatsby";
import $ from "jquery";
import jQuery from "jquery";
import "../styles/navbar.css";
const Navbar = () => {
  useEffect(() => {});
  return (
    <div style={{ textAlign: "left", zIndex: "1000" }}>
      <div className="myLogo">
        <div className="logoText">
          <h1 style={{ fontWeight: 600 }}>
            protik
            <a style={{ fontWeight: 100 }}>
              chanda<span className="blink">_</span>
            </a>
          </h1>
        </div>
      </div>

      <section className="stageNav">
        <div id="home" className="divItem">
          <p id="homep" className="pNav">
            <Link className="linkStyle" to="#recentPosts">
              Blog
            </Link>
          </p>
        </div>
        <div className="divItem" id="about">
          <p className="pNav">
            <Link className="linkStyle" to="#myProjects">
              Projects
            </Link>
          </p>
        </div>
        <div className="divItem" id="contact">
          <p className="pNav">
            <Link className="linkStyle" to="#myDesigns">
              Designs
            </Link>
          </p>
        </div>
        <div className="divItem" id="gallery">
          <p className="pNav">
            <Link className="linkStyle" to="#aboutMe">
              About
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
