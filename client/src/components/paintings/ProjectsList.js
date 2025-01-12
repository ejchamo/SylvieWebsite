import React from "react";
import ProjectTile from "./ProjectTile";

const ProjectsList = (props) => {
  const { projects, selectedProject, setSelectedProject, setTitles, setImages } = props;

  const projectTiles = projects.map((project) => {
    return (
      <ProjectTile
        key={project}
        project={project}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        setTitles={setTitles}
        setImages={setImages}
      />
    );
  });

  return <div className="projects-list">{projectTiles}</div>;
};

export default ProjectsList;
