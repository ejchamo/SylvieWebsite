import React, { useState, useEffect } from "react";
import getProjects from "../../services/getProjects";
import getTitles from "../../services/getTitles";
import ProjectsList from "./ProjectsList";
import TitlesList from "./TitlesList";
import ImagesList from "./ImagesList";

const Paintings = (props) => {
  const { user } = props;
  const [projects, setProjects] = useState([]);
  const [titles, setTitles] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [selectedTitle, setSelectedTitle] = useState(undefined);

  useEffect(() => {
    getProjects().then((response) => {
      setProjects(response.projects);
      setSelectedProject(response.projects[0]);
      getTitles(response.projects[0]).then((response) => {
        const titles = response.projectImages.map((image) => image.title);
        setTitles(titles);
        setImages(response.projectImages);
      });
    });
  }, []);

  let titlesFormat = "3 scrollable-column";

  if (window.innerWidth < 640) {
    titlesFormat = "1";
  }

  return (
    <div className="paintings-container">
      <div className="grid-x grid-margin-x">
        <div className="cell medium-1">
          <ProjectsList
            projects={projects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            setTitles={setTitles}
            setImages={setImages}
          />
        </div>
        <div className={`cell medium-${titlesFormat}`}>
          <TitlesList
            titles={titles}
            selectedTitle={selectedTitle}
            setSelectedTitle={setSelectedTitle}
          />
        </div>
        <div className="cell medium-8 scrollable-column">
          <ImagesList images={images} user={user} />
        </div>
      </div>
    </div>
  );
};

export default Paintings;
