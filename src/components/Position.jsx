import React from "react";

export default function Position(props) {
  var key = 1;
  const points = props.desc.map((point) => {
    return (
      <li key={key++} className="position-point">
        {point}
      </li>
    );
  });

  return (
    <div className="position-container">
      <a href={props.link} target="_blank">
        <div className="position-logo-container">        
          <img className="position-logo" src={props.src} />
        </div>
      </a>
      <div className="position-text">
        <span className="position-title">{props.title}</span> @{" "}
        <a className="position-org" href={props.link} target="_blank">
          {props.org}
        </a>
        <br />
        <span className="position-time">{props.time}</span>
        <br />
        <br />
        <span className="position-headline">{props.headline}</span>
        <ul>{points}</ul>
      </div>
    </div>
  );
}
