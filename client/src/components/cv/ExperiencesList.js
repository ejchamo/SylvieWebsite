import React from "react";
import ExperienceTile from "./ExperienceTile";

const ExperienceList = (props) => {
  const { experiences, user } = props;

  const experienceTiles = experiences.map((experience) => {
    return <ExperienceTile key={experience.id} user={user} experience={experience} />;
  });

  return <div>{experienceTiles}</div>;
};

export default ExperienceList;
