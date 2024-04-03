import React from "react";

const ScrollDownd = ({ darkMode }) => {
  return (
    <div className="scroll__down">
      <a
        href="#contact"
        className={`mouse__wrapper ${darkMode ? " text-white " : ""}`}
      >
        <span className="home__scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDownd;
