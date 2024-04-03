import React from "react";
import "./contact.css";

const Contact = ({ darkMode }) => {
  return (
    <section className="contact container section" id="contact">
      <h2
        className={`section_title ${darkMode ? " text-white" : "light-theme"}`}
      >
        {" "}
        Get In Touch
      </h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3
            className={`contact__title ${
              darkMode ? " text-slate-200" : "light-theme"
            }`}
          >
            Let's talk about everything!
          </h3>
          <p
            className={`contact__details ${
              darkMode ? " text-slate-400" : "light-theme"
            }`}
          >
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className={`contact__form-input ${
                  darkMode
                    ? " text-white bg-slate-500 placeholder-white"
                    : "light-theme "
                }`}
                placeholder="Insert Your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className={`contact__form-input ${
                  darkMode
                    ? " text-white bg-slate-500 placeholder-white"
                    : "light-theme "
                }`}
                placeholder="Insert Your email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className={`contact__form-input ${
                darkMode
                  ? " text-white bg-slate-500 placeholder-white"
                  : "light-theme "
              }`}
              placeholder="Insert Your subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className={`contact__form-input ${
                darkMode
                  ? " text-white bg-slate-500 placeholder-white"
                  : "light-theme "
              }`}
              placeholder="Write your message"
            ></textarea>
          </div>
          <button
            className={`btn ${darkMode ? " text-white" : "light-theme "}`}
          >
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
