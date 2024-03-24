import React from "react";
import "./home.css";
import Me from "../../assets/Presentacion_pic-removebg-preview (1).png";
import HeaderSocials from "./HeaderSocials";
import ScrollDownd from "./ScrollDownd";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">David Ortega</h1>
        <span className="home__education">I'm a FullStack developer</span>
        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDownd />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
