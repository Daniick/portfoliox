import React from "react";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";

const HeaderSocials = ({ darkMode }) => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/david.ortega.p/"
        target="_blank"
        className={`home__socials-link ${
          darkMode ? " text-white hover:text-yellow-300" : ""
        }`}
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com/Daniick"
        target="_blank"
        className={`home__socials-link ${
          darkMode ? " text-white hover:text-yellow-300" : ""
        }`}
      >
        <FaGithub />
      </a>

      <a
        href="https://www.youtube.com"
        target="_blank"
        className={`home__socials-link ${
          darkMode ? " text-white hover:text-yellow-300" : ""
        }`}
      >
        <FaYoutube />
      </a>

      <a
        href="https://www.linkedin.com/in/davidandresortega/"
        target="_blank"
        className={`home__socials-link ${
          darkMode ? " text-white hover:text-yellow-300" : ""
        }`}
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default HeaderSocials;
