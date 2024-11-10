"use client";
import React, { useRef } from "react";
import FaceBookIcon from "../../public/facebook-icon.png";
import InstagramIcon from "../../public/instagram.png";
import LinkdeinIcon from "../../public/317750_linkedin_icon (4).png";
import GithubIcon from "../../public/github .png";
import "../style/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_2fy8f7k",
          "template_s3v0hwj",
          form.current,
          "pXeVVhZqOtwwRNpRx"
        )
        .then((result) => {
          console.log(result.text);
          (e.target as HTMLFormElement).reset();
          alert("Email Sent!");
        })
        .catch((error) => {
          console.log(error.text);
        });
    } else {
      console.error("Form reference is not defined");
    }
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="to_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your message"
          ></textarea>

          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>

          <div className="links">
            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/muhammad-usman-naseem-295720271/" target="_blank" rel="noopener noreferrer">
              <img
                src={LinkdeinIcon.src} // Access the `src` property of the imported image
                alt="LinkedIn"
                className="link"
              />
            </a>
            {/* GitHub Link */}
            <a href="https://github.com/usmannaseem23" target="_blank" rel="noopener noreferrer">
              <img
                src={GithubIcon.src} // Access the `src` property of the imported image
                alt="GitHub"
                className="link"
              />
            </a>
            {/* Facebook Link */}
            <a href="https://www.facebook.com/profile.php?id=100086418654475" target="_blank" rel="noopener noreferrer">
              <img
                src={FaceBookIcon.src} // Access the `src` property of the imported image
                alt="Facebook"
                className="link"
              />
            </a>
            {/* Instagram Link */}
            <a href="https://www.instagram.com/usman_naseem23/" target="_blank" rel="noopener noreferrer">
              <img
                src={InstagramIcon.src} // Access the `src` property of the imported image
                alt="Instagram"
                className="link"
              />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
