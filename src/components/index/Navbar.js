import React, { useEffect } from "react";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { Link } from "gatsby";
import "../../styles/navbar.css";
const Navbar = () => {
  useEffect(() => {});
  return (
    <div style={{ zIndex: "1000" }}>
      {/* Navbar Start */}
      <div className="myLogo">
        <div className="logoText" onClick={(event) => (window.location = "/")}>
          <h1 style={{ fontWeight: 600, fontSize: "2rem" }}>
            protik
            <a style={{ fontWeight: 100 }}>
              chanda<span className="blink">_</span>
            </a>
          </h1>
        </div>
        {/* Social Links */}
        <div className="navbarContact">
          <Link
            className="linkStyle"
            to="https://www.linkedin.com/in/protikchanda"
          >
            <FaLinkedin style={{ height: "2em", width: "2em" }} />
          </Link>
          {/* <Link className="linkStyle" to="#recentPosts">
            <FaTwitterSquare style={{ height: "2em", width: "2em" }} />
          </Link> */}
          <Link className="linkStyle" to="https://github.com/piedpipr">
            <FaGithubSquare style={{ height: "2em", width: "2em" }} />
          </Link>
        </div>
      </div>
      {/* Navbar End */}

      {/* Menu Start */}
      <section className="stageNav">
        {/* <div id="home" className="divItem">
          <p id="homep" className="pNav">
            <Link className="linkStyle" to="#recentPosts">
              Blog
            </Link>
          </p>
        </div> */}
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
              Resume
            </Link>
          </p>
        </div>
        <div className="divItem" id="gallery">
          <p className="pNav">
            <Link className="linkStyle" to="#myPublication">
              Publication
            </Link>
          </p>
        </div>
      </section>
      {/* Menu End */}
    </div>
  );
};

export default Navbar;
