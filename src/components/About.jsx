import React from "react";
import Language from "./Language";
import data from "/src/languageSources";

export default function About() {
  const dataElements = data.map((language) => {
    return <Language src={language.src} key={language.id} />;
  });
  return (
    <div>
      <h1 id="about" className="section-header">
        About Me
      </h1>
      <div className="section-line"></div>
      <div className="about-container">
        <div className="about-blurb">
          Hello, and welcome to my{" "}
          <a className="about-link" href="#home">
            developer portfolio
          </a>
          !
          <br />
          <br />
          My programming journey began at a summer camp I attended in 2018.
          There, I learned the basics of computer science in Java and later used
          my newfound skill to create my first ever project,{" "}
          <a className="about-link" href="#projects">
            The Antonio Mystery
          </a>
          .
          <br />
          <br />
          Eventually, my love for programming led me to enroll in the Computer
          Science program at the University of Waterloo. Here, I've been able to
          pour all of my energy into coding, learning both C and Racket in the
          span of 8 months!
          <br />
          <br />I also joined a design team called{" "}
          <a className="about-link" href="#experience">
            UW VEX U
          </a>{" "}
          where I used C++ to program robots! On my own, I created a{" "}
          <a className="about-link" href="#projects">
            Hangman
          </a>{" "}
          app using HTML, CSS, and JavaScript, and built this site using React.
          <br />
          <br />
          In my free time, I enjoy playing badminton and going fishing (which
          was the inspiration for the{" "}
          <a className="about-link" href="#home">
            game
          </a>{" "}
          above!).
        </div>
        <div className="languages">{dataElements}</div>
      </div>
    </div>
  );
}
