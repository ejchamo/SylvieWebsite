import React, { useState, useEffect } from "react";
import getExperiences from "../../services/getExperiences";
import ExperienceList from "./ExperiencesList";

const Experiences = (props) => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperiences().then((response) => {
      setExperiences(response.experiences);
    });
  }, []);

  return (
    <div>
      <h1>CV</h1>
      <ExperienceList experiences={experiences} user={props.user} />
    </div>
  );
};

export default Experiences;
