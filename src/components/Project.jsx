import React from "react";

export default function Project(props) {
  return (
    <div className="project-container">
      <a href={props.link} target="_blank">
        <div className="project-logo-container">        
          <img className="project-logo" src={props.src} />
        </div>
      </a>
      <div className="project-text">
        <span className="project-title">{props.title}</span>
        <br />
        <span className="project-time">{props.time}</span>
        <br />
        <br />
        <span>{props.desc}</span>
      </div>
      <a className="project-link" href={props.link} target="_blank">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  );
}
