import React from "react";
import Social from "./Social";

export default function Title() {
  return (
    <div className="title">
      <h2>Hi! I'm</h2>
      <h1>LARRY CHEN,</h1>
      <h3>
        an aspiring software developer studying Computer Science at the
        University of Waterloo.
      </h3>
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
    </div>
  );
}
