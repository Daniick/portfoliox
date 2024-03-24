import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import { IoIosHome, IoIosBriefcase } from "react-icons/io";
import { SlUserFollowing } from "react-icons/sl";
import { PiGraduationCapFill } from "react-icons/pi";
import { IoDocumentsOutline } from "react-icons/io5";
import { TfiWrite, TfiThought } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} className="img" alt="" />
      </a>

      <nav className="nav">
        <div className="nav__logo">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <IoIosHome />
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <SlUserFollowing />
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <IoIosBriefcase />
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <PiGraduationCapFill />
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <IoDocumentsOutline />
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <TfiWrite />
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <TfiThought />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; 2020 - 2023.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
