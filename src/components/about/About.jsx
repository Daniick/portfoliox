import React from "react";
import "./about.css";
import Abouti from "../../assets/LINKDN-removebg-preview.png";
import AboutBox from "./AboutBox";
import CV from "../../assets/CV.pdf";

const About = ({ darkMode }) => {
  return (
    <section className="about container section" id="about">
      <h2
        className={`section_title ${darkMode ? " text-white" : "light-theme"}`}
      >
        About Me
      </h2>
      <div
        className={`about__container grid ${
          darkMode ? " text-black " : "light-theme"
        }`}
      >
        <img src={Abouti} alt="" className="about__img" />

        <div
          className={`about__data grid ${
            darkMode ? " bg-slate-300" : "light-theme"
          }`}
        >
          <div className="about__info">
            <p className="about__description">
              I am a Full Stack Developer with a passion for creating
              exceptional user experiences. I have a strong foundation in
              JavaScript and I am always eager to learn new technologies and
              frameworks.
            </p>
            <a
              href={CV}
              target="_blank"
              className={`btn ${darkMode ? " text-white" : "light-theme "}`}
            >
              Download CV
            </a>
          </div>

          <div className="about__skill grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage ui"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Social Media Manager</h3>
                <span className="skills__number">75%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage social"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
