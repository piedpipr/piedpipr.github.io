import React, { useEffect } from "react";
import { Link } from "gatsby";
import $ from "jquery";
import jQuery from "jquery";
import "../styles/navbar.css";
const Navbar = () => {
  useEffect(() => {});
  return (
    <div>
      <section className="stageNav">
        <div id="home" className="divItem">
          <p id="homep" className="pNav">
            Home
          </p>
        </div>
        <div className="divItem" id="about">
          <p className="pNav">About</p>
        </div>
        <div className="divItem" id="contact">
          <p className="pNav">Gallery</p>
        </div>
        <div className="divItem" id="gallery">
          <p className="pNav">Contact</p>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
