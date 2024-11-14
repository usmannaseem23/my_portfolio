"use client"; 
import Image from 'next/image';

import React, { useState } from "react";

import "../style/navbar.css";
import logo from "../../public/Usman.png";
import { Link } from "react-scroll";
import contactinf from "../../public/contact.png";
import Menu from "../../public/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Use Image component instead of img */}
      <Image src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="desktopMenuListItems">
          Home
        </Link>
        <Link  activeClass="active" to="skills" spy={true} offset={-60} duration={500} className="desktopMenuListItems">
          About
        </Link>
        <Link activeClass="active" to="/" spy={true} offset={-200} duration={500}  className="desktopMenuListItems"   onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}   >
          Contact
        </Link>
      
      </div>

      <button
        className="desktopMenubtn"
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Image src={contactinf} alt="Contact" className="desktopMenubtnimg" />
        Contact me
      </button>

      <Image src={Menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="ListItems" onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link activeClass="active" to="skills" spy={true} offset={-50} duration={500} className="ListItems" onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link activeClass="active" to="contactPage" spy={true} offset={-40} duration={500} className="ListItems" onClick={() => setShowMenu(false)} >
          Contact
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;