import React, { useState } from "react";
import DeleteButton from "../layout/DeleteButton";
import deleteImage from "../../services/deleteImage";
import editImage from "../../services/editImage";

const ImageTile = (props) => {
  const { image, user } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState(image);

  let imageTile = <></>;
  let deleteOption = <></>;
  let editOption = <></>;

  if (image) {
    let imageDetails = image.image;
    if (user && user.admin) {
      deleteOption = <DeleteButton service={deleteImage} id={imageDetails.id} />;
      editOption = (
        <button
          className="button"
          onClick={() => {
            setNewImage(imageDetails);
            setIsEditing(!isEditing);
          }}
        >
          Edit
        </button>
      );
    }

    imageTile = (
      <div className="image-tile">
        {editOption}
        {deleteOption}
        <img src={imageDetails.image} alt={imageDetails.title} />
        {imageDetails.title}
        {imageDetails.medium}
        {imageDetails.dimensions}
      </div>
    );
  }

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
    } catch (error) {
      console.log(error);
    }
  };

  if (isEditing) {
    return (
      <div>
        <h1>Edit Image</h1>
        <form onSubmit={handleImageEdit}>
          <label>
            Title:
            <input type="text" name="title" value={newImage.title} onChange={handleInputChange} />
          </label>
          <label>
            Year:
            <input type="text" name="year" value={newImage.year} onChange={handleInputChange} />
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
            Order:
            <input type="number" name="order" value={newImage.order} onChange={handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  return imageTile;
};

export default ImageTile;
