import React, { useState } from "react";

import editImage from "../../services/editImage";

const EditImageForm = (props) => {
  const { image, setIsEditing } = props;
  const [newImage, setNewImage] = useState(image);

  const handleInputChange = (event) => {
    setNewImage({
      ...newImage,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleImageEdit = async () => {
    try {
      await editImage(newImage.id, newImage);
      setIsEditing(false);
      window.location.reload(true);
    } catch (error) {}
  };

  return (
    <div>
      <h1>Edit Image</h1>
      <form onSubmit={handleImageEdit}>
        <label>
          Title:
          <input type="text" name="title" value={newImage.title} onChange={handleInputChange} />
        </label>
        <label>
          Project:
          <input type="text" name="project" value={newImage.project} onChange={handleInputChange} />
        </label>
        <label>
          Medium:
          <input type="text" name="medium" value={newImage.medium} onChange={handleInputChange} />
        </label>
        <label>
          Dimensions:
          <input
            type="text"
            name="dimensions"
            value={newImage.dimensions}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Year:
          <input type="text" name="year" value={newImage.year} onChange={handleInputChange} />
        </label>
        <label>
          Display Size:
          <select name="displaySize" onChange={handleInputChange} value={newImage.displaySize}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          Order:
          <input type="number" name="order" value={newImage.order} onChange={handleInputChange} />
        </label>
        <label>
          Carousel:
          <input
            type="checkbox"
            name="carousel"
            onChange={handleInputChange}
            value={!newImage.carousel}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EditImageForm;
