import React from "react";
import data from "/src/projectSources.jsx";
import Project from "./Project.jsx";

export default function Projects() {
  const dataElements = data.map((project) => {
    return (
      <Project
        key={project.id}
        title={project.title}
        src={project.logo}
        desc={project.description}
        link={project.link}
        time={project.time}
      />
    );
  });
  return (
    <div>
      <h1 id="projects" className="section-header">Projects</h1>
      <div className="section-line"></div>
      <div className="projects-container">{dataElements}</div>
    </div>
  );
}
