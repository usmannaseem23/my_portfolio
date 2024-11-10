"use client"
import React from "react";
import "../style/home.css";
import bg from "../../public/profile.png";
import { Link } from "react-scroll";
import btnImg from "../../public/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Usman Naseem</span> <br /> Web Developer
        </span>

        <p className="introPara">
        "I am seeking a position in a professional environment <br /> where I can advance my career by fully dedicating my <br />  knowledge and skills to contribute meaningfully to the <br /> organization."
        </p>

        {/* Link component with the required 'to' prop */}
        <Link to="hire-section">
          <button className="btn">
            <img src={btnImg.src} alt="Hire Me" className="btning" />
            Hire ME
          </button>
        </Link>
      </div>

      <img src={bg.src} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
