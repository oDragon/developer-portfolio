import React from "react";
import Fisher from "./components/Fisher";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navigation />
      <div className="home-container">
        <Title />
        <Fisher />
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
