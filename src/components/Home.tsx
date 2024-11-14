import React from "react";
import "../style/home.css";
import bg from "../../public/profile.png";
import { Link } from "react-scroll";
import btnImg from "../../public/hireme.png";
import Image from "next/image";


const Intro = () => {
 

  return (
    <section id="intro">
      <div className="introContent">
        <span  className="hello">Hello,</span>
        <span className="introText">
          I&apos;m <span className="introName">Usman Naseem</span> <br /> Web Developer
        </span>

        <p className="introPara">
        I am seeking a position in a professional environment <br /> where I can advance my career by fully dedicating my <br /> knowledge and skills to contribute meaningfully to the <br /> organization. </p>

        {/* Link component with the required 'to' prop */}
        <Link to="hire-section">
    
        <button className="btn">
            <Image src={btnImg} alt="Hire Me" className="btning" width={16} height={16}  />
            Hire ME
          </button>
        </Link>
      </div>

      {/* Using Next.js Image component for background */}
      <Image src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;