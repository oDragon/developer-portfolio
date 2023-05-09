import React from "react";
import data from "/src/experienceSources.jsx";
import Position from "./Position.jsx";

export default function Experience() {
  const dataElements = data.map((position) => {
    return (
      <Position
        key={position.id}
        src={position.img}
        org={position.org}
        title={position.title}
        headline={position.headline}
        desc={position.desc}
        time={position.time}
        link={position.link}
      />
    );
  });
  return (
    <div>
      <h1 id="experience" className="section-header">Experience</h1>
      <div className="section-line"></div>
      <div>{dataElements}</div>
    </div>
  );
}
