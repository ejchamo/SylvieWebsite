import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NewExperienceForm = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [newExperience, setNewExperience] = useState({
    title: "",
    description: "",
    order: "",
  });

  const postExperience = async (newExperienceData) => {
    try {
      const response = await fetch("/api/v1/experiences", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newExperienceData),
      });
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      setShouldRedirect(true);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to="/cv" />;
  }

  const handleInputChange = (event) => {
    setNewExperience({
      ...newExperience,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postExperience(newExperience);
  };

  return (
    <div>
      <h1>Add New Experience</h1>
      <form onSubmit={handleSubmit}>
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
          Description:
          <input
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
        <input type="submit" value="Add Experience" />
      </form>
    </div>
  );
};

export default NewExperienceForm;
