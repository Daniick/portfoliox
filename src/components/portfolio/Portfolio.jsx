import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = ({ darkMode }) => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2
        className={`section_title ${darkMode ? " text-white" : "light-theme"}`}
      >
        Recent Works
      </h2>

      <div
        className={`work__filters ${
          darkMode ? " text-gray-400" : "light-theme"
        }`}
      >
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span
          className="work__item"
          onClick={() => filterItem("Front-End(React)")}
        >
          Front-End(React)
        </span>
        <span className="work__item" onClick={() => filterItem("Back-End")}>
          Back-End
        </span>
        <span className="work__item" onClick={() => filterItem("React + API")}>
          React + API
        </span>
        <span className="work__item" onClick={() => filterItem("Branding")}>
          Branding
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div
              className={`work__card ${
                darkMode ? " bg-slate-400" : "light-theme"
              }`}
              key={id}
            >
              <div className="work__thumbnail">
                <img src={image} alt={title} className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>

              <a href={link} className="work__button" target="_blank">
                <i href="" className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
