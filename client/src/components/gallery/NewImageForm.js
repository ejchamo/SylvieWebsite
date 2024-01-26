import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NewImageForm = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [newImage, setNewImage] = useState({
    title: "",
    year: "",
    medium: "",
    dimensions: "",
    imageUrl: "",
  });

  const postImage = async (newImageData) => {
    try {
      const response = await fetch(`/api/v1/images`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newImageData),
      });
      setShouldRedirect(true);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to="/gallery" />;
  }

  const handleInputChange = (event) => {
    setNewImage({
      ...newImage,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postImage(newImage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Image</h2>
      <label>
        Image Title:
        <input type="text" name="title" onChange={handleInputChange} value={newImage.title} />
      </label>
      <label>
        Year:
        <input type="text" name="year" onChange={handleInputChange} value={newImage.year} />
      </label>
      <label>
        Medium:
        <input type="text" name="medium" onChange={handleInputChange} value={newImage.medium} />
      </label>
      <label>
        Dimensions:
        <input
          type="text"
          name="dimensions"
          onChange={handleInputChange}
          value={newImage.dimensions}
        />
      </label>
      <label>
        Image URL:
        <input type="text" name="imageUrl" onChange={handleInputChange} value={newImage.imageUrl} />
      </label>

      <input className="button" type="submit" value="Submit" />
    </form>
  );
};

export default NewImageForm;
