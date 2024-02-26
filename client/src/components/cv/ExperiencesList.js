import React from "react";
import ExperienceTile from "./ExperienceTile";

const ExperienceList = (props) => {
  const { experiences, user } = props;

  const experiencesByType = experiences.reduce((groups, experience) => {
    const group = groups[experience.type] || [];
    group.push(experience);
    groups[experience.type] = group;
    return groups;
  }, {});

  const experienceTiles = Object.entries(experiencesByType).map(([type, experiences]) => (
    <div key={type}>
      <h2>{type}</h2>
      {experiences.map((experience) => (
        <ExperienceTile key={experience.id} user={user} experience={experience} />
      ))}
    </div>
  ));

  return <div>{experienceTiles}</div>;
};

export default ExperienceList;
