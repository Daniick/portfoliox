import React from "react";
import "./services.css";
import Service1 from "../../assets/service-1.svg";
import Service2 from "../../assets/service-2.svg";
import Service3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Service1,
    title: "UI/UX design",
    description:
      "Design focuses on creating intuitive digital interfaces for user satisfaction and efficiency. It merges visual design with user experience principles.",
  },
  {
    id: 2,
    image: Service2,
    title: "Front-End Development",
    description:
      "Involves creating and maintaining websites or web applications using programming languages like React, Tailwind, and JavaScript.",
  },
  {
    id: 3,
    image: Service3,
    title: "Back-End Development",
    description:
      "Involves building and maintaining server-side logic and databases for web applications, ensuring functionality and data management.",
  },
];

const Services = ({ darkMode }) => {
  return (
    <section className="services container section" id="services">
      <h2
        className={`section_title ${darkMode ? " text-white" : "light-theme"}`}
      >
        Services
      </h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />\
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
