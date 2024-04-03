import React, { useState } from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Sidebar from "./components/sidebar/Sidebar";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
// import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Sidebar darkMode={darkMode} />
      <main
        className={`main ${
          darkMode ? "bg-black text-gray-400" : "light-theme"
        }`}
      >
        <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Resume darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <Pricing darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        {/* <Blog /> */}
        <Contact darkMode={darkMode} />
      </main>
    </>
  );
}

export default App;
