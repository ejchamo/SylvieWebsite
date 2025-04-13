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

  const typeOrder = [
    "Education",
    "Solo Exhibitions",
    "Group Exhibitions",
    "Residencies",
    "Awards",
    "Teaching",
  ];

  const experienceTiles = Object.entries(experiencesByType)
    .sort(([typeA], [typeB]) => typeOrder.indexOf(typeA) - typeOrder.indexOf(typeB))
    .map(([type, experiences]) => (
      <div key={type} className="experience-type">
        <div className="experience-category">{type}</div>
        {experiences.map((experience) => (
          <ExperienceTile key={experience.id} user={user} experience={experience} />
        ))}
      </div>
    ));

  return <div>{experienceTiles}</div>;
};

export default ExperienceList;
