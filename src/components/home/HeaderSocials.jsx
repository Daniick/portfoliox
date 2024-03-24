import React from "react";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/david.ortega.p/"
        target="_blank"
        className="home__socials-link"
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com/Daniick"
        target="_blank"
        className="home__socials-link"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.youtube.com"
        target="_blank"
        className="home__socials-link"
      >
        <FaYoutube />
      </a>

      <a
        href="https://www.linkedin.com/in/davidandresortega/"
        target="_blank"
        className="home__socials-link"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default HeaderSocials;
