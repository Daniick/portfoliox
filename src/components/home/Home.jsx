import React from "react";
import "./home.css";
import Me from "../../assets/Presentacion_pic-removebg-preview (1).png";
import HeaderSocials from "./HeaderSocials";
import ScrollDownd from "./ScrollDownd";
import Shapes from "./Shapes";

const Home = ({ darkMode, toggleDarkMode }) => {
  return (
    <section className="home container " id="home">
      <button
        onClick={toggleDarkMode}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4 text-xs w-[60px] fixed top-10 right-10  z-50"
      >
        {darkMode ? "Ligth " : "Dark "}
      </button>
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1
          className={`home__name ${
            darkMode ? " text-white hover:text-yellow-300" : ""
          }`}
        >
          David Ortega
        </h1>
        <span className="home__education">I'm a FullStack developer</span>
        <HeaderSocials darkMode={darkMode} />

        <a
          href="#contact"
          className={`btn ${darkMode ? " text-white" : "light-theme "}`}
        >
          Hire Me
        </a>
        <ScrollDownd darkMode={darkMode} />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
