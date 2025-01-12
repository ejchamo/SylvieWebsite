import React from "react";
import getTitles from "../../services/getTitles";

const ProjectTile = (props) => {
  const { project, selectedProject, setSelectedProject, setTitles, setImages } = props;

  const handleClick = () => {
    setSelectedProject(project);
    getTitles(project).then((response) => {
      const titles = response.projectImages.map((image) => image.title);
      setTitles(titles);
      setImages(response.projectImages);
    });
  };

  let isSelected = "";

  if (project === selectedProject) {
    isSelected = "selected-project";
  }

  return (
    <div className={`project-tile ${isSelected}`} onClick={handleClick}>
      {project}
    </div>
  );
};

export default ProjectTile;
