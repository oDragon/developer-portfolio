import React from "react";
import Fisher from "./components/Fisher";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Social from "./components/Social";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navigation />
      <Title />
      <Fisher />
      <section className="icons-container">
        <Social
          link="https://www.instagram.com/l.arrychen/"
          fa="fa-brands fa-instagram"
        />
        <Social
          link="https://github.com/oDragon"
          fa="fa-brands fa-github"
        />
        <Social
          link="https://www.linkedin.com/in/-larrychen/"
          fa="fa-brands fa-linkedin"
        />
      </section>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
