import React from "react";
import { ImFire } from "react-icons/im";
import { FiCoffee } from "react-icons/fi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { GiPodiumWinner } from "react-icons/gi";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <ImFire className="about__icon" />

        <div>
          <h3 className="about__title">24</h3>
          <span className="about__subtitle"> Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <FiCoffee className="about__icon" />

        <div>
          <h3 className="about__title">672</h3>
          <span className="about__subtitle">Cup Of Coffe</span>
        </div>
      </div>

      <div className="about__box">
        <RiEmotionHappyLine className="about__icon" />
        <div>
          <h3 className="about__title">21</h3>
          <span className="about__subtitle">Satisfied Clients</span>
        </div>
      </div>

      <div className="about__box">
        <GiPodiumWinner className="about__icon" />
        <div>
          <h3 className="about__title">3</h3>
          <span className="about__subtitle">Nominees Winner</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
