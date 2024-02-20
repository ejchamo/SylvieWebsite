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
        <div>
          {editOption}
          {deleteOption}
        </div>
        <div>
          <img src={imageDetails.image} alt={imageDetails.title} />
        </div>
        <div className="image-tile-details">
          <em>{imageDetails.title}</em>
          {`, ${imageDetails.year}, ${imageDetails.medium}, ${imageDetails.dimensions}`}
        </div>
      </div>
    );
  }

  if (isEditing) {
    return <EditImageForm image={image} setIsEditing={setIsEditing} />;
  }

  return imageTile;
};

export default ImageTile;
