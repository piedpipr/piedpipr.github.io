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
      <div className="myLogo">
        <div className="logoText">
          <h1 style={{ fontWeight: 600 }}>
            protik
            <a style={{ fontWeight: 100 }}>
              chanda<span className="blink">_</span>
            </a>
          </h1>
        </div>
        <div className="navbarContact">
          <Link className="linkStyle" to="#recentPosts">
            <FaLinkedin style={{ height: "2em", width: "2em" }} />
          </Link>
          <Link className="linkStyle" to="#recentPosts">
            <FaTwitterSquare style={{ height: "2em", width: "2em" }} />
          </Link>
          <Link className="linkStyle" to="#recentPosts">
            <FaGithubSquare style={{ height: "2em", width: "2em" }} />
          </Link>
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