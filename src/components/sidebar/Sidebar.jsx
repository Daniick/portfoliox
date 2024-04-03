import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/icons8-d-64.png";
import { IoIosHome, IoIosBriefcase } from "react-icons/io";
import { SlUserFollowing } from "react-icons/sl";
import { PiGraduationCapFill } from "react-icons/pi";
import { IoDocumentsOutline, IoMenuOutline } from "react-icons/io5";
import { TfiWrite, TfiThought } from "react-icons/tfi";
import { CiDollar } from "react-icons/ci";
import { GiStarsStack } from "react-icons/gi";
import classNames from "classnames";

const Sidebar = ({ darkMode }) => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside
        className={`aside ${toggle ? "show-menu" : ""} ${
          darkMode ? "bg-gray-900 text-white" : ""
        }`}
      >
        <a href="#home" className="nav__logo">
          <img src={Logo} className="img" alt="" />
        </a>

        <nav className="nav">
          <div className="nav__logo">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <IoIosHome
                    className={`${
                      darkMode ? " text-white hover:text-yellow-300" : ""
                    }`}
                  />
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <SlUserFollowing
                    className={`${
                      darkMode ? " text-white hover:text-yellow-300" : ""
                    }`}
                  />
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <IoIosBriefcase
                    className={`${
                      darkMode ? " text-white hover:text-yellow-300" : ""
                    }`}
                  />
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <PiGraduationCapFill
                    className={`${
                      darkMode ? " text-white hover:text-yellow-300" : ""
                    }`}
                  />
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <IoDocumentsOutline
                    className={`${
                      darkMode ? " text-white hover:text-yellow-300" : ""
                    }`}
                  />
                </a>
              </li>
              <li className="nav__item">
                <a href="#pricing" className="nav__link">
                  <CiDollar
                    className={`${
                      darkMode ? " text-white hover:text-yellow-300" : ""
                    }`}
                  />
                </a>
              </li>
              <li className="nav__item">
                <a href="#testimonials" className="nav__link">
                  <GiStarsStack
                    className={`${
                      darkMode ? " text-white hover:text-yellow-300" : ""
                    }`}
                  />
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <TfiThought
                    className={`${
                      darkMode ? " text-white hover:text-yellow-300" : ""
                    }`}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2020 - 2023.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <IoMenuOutline />
      </div>
    </>
  );
};

export default Sidebar;
