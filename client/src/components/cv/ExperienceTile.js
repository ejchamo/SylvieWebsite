import React, { useState } from "react";
import DeleteButton from "../layout/DeleteButton";
import deleteExperience from "../../services/deleteExperience";
import editExperience from "../../services/editExperience";

const ExperienceTile = (props) => {
  const { user, experience } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [newExperience, setNewExperience] = useState(experience);
  let deleteOption = <></>;
  let editOption = <></>;

  if (user && user.admin) {
    deleteOption = <DeleteButton service={deleteExperience} id={experience.id} />;
    editOption = (
      <button
        className="button"
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      >
        Edit
      </button>
    );
  }

  const handleInputChange = (event) => {
    setNewExperience({
      ...newExperience,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleExperienceEdit = async () => {
    try {
      await editExperience(experience.id, newExperience);
      setIsEditing(false);
      window.location.reload(true);
    } catch (error) {}
  };

  if (isEditing) {
    return (
      <div>
        <h1>Edit Experience</h1>
        <form onSubmit={handleExperienceEdit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newExperience.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Exhibition Name:
            <input
              type="text"
              name="exhibitionName"
              value={newExperience.exhibitionName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              name="description"
              value={newExperience.description}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Order:
            <input
              type="number"
              name="order"
              value={newExperience.order}
              onChange={handleInputChange}
            />
          </label>
          <input className="button" type="submit" value="Edit Experience" />
        </form>
      </div>
    );
  }

  return (
    <div>
      {editOption}
      {deleteOption}
      <h2>{experience.title}</h2>
      <h5>{experience.exhibitionName}</h5>
      <pre>{experience.description}</pre>
    </div>
  );
};

export default ExperienceTile;
