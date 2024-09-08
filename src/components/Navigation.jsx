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
      <input type="checkbox" id="sidebar-active" />
      <label id="overlay" for="sidebar-active"></label>
      <label className="menu-icon" for="sidebar-active">
        <i className="fa-solid fa-bars"></i>
      </label>
      <div className="links-container">
        <label className="close-menu-icon" for="sidebar-active">
          <i className="fa-solid fa-x"></i>
        </label>
        <a href="#about" className="nav-link-mobile">About</a>
        <a href="#experience" className="nav-link-mobile">Experience</a>
        <a href="#projects" className="nav-link-mobile">Projects</a>
        <a href="#contact" className="nav-link-mobile">Contact</a>
      </div>
    </nav>
  );
}
