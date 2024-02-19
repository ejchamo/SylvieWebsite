import React, { useState } from "react";
import DeleteButton from "../layout/DeleteButton";
import EditImageForm from "./EditImageForm";
import deleteImage from "../../services/deleteImage";

const ImageTile = (props) => {
  const { image, user } = props;
  const [isEditing, setIsEditing] = useState(false);

  let imageTile = <></>;
  let deleteOption = <></>;
  let editOption = <></>;

  if (image) {
    let imageDetails = image;
    if (user && user.admin) {
      deleteOption = <DeleteButton service={deleteImage} id={imageDetails.id} />;
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

  if (isEditing) {
    return <EditImageForm image={image} setIsEditing={setIsEditing} />;
  }

  return imageTile;
};

export default ImageTile;
