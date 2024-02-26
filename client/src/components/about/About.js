import React, { useState, useEffect } from "react";
import getAbout from "../../services/getAbout";
import editAbout from "../../services/editAbout";

const About = (props) => {
  const { user } = props;
  const [about, setAbout] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getAbout().then((about) => {
      setAbout(about);
    });
  }, []);

  let editOption = <></>;

  if (user && user.admin) {
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
    setAbout({
      ...about,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAboutEdit = async () => {
    try {
      await editAbout(about.id, about);
      setIsEditing(false);
      window.location.reload(true);
    } catch (error) {}
  };

  if (isEditing) {
    return (
      <div>
        <h1>Edit About</h1>
        <form onSubmit={handleAboutEdit}>
          <label>
            Details:
            <textarea
              type="text"
              name="details"
              value={about.details}
              onChange={handleInputChange}
            />
          </label>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  return (
    <div className="about">
      {editOption}
      <pre className="scrollable-pre">{about.details}</pre>
    </div>
  );
};

export default About;
