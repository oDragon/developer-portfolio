import React from "react";
import bobber from "/src/images/bobber.png";

export default function Navigation() {
  return (
    <nav id="home">
      <img className="nav-icon" src={bobber} />
      <a href="#about" className="nav-link">About</a>
      <a href="#experience" className="nav-link">Experience</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
}
