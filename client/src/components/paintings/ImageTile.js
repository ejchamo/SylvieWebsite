import React from "react";
import DeleteButton from "../layout/DeleteButton";
import deleteImage from "../../services/deleteImage";

const ImageTile = (props) => {
  const { image, user } = props;

  let imageTile = <></>;
  let deleteOption = <></>;

  if (image) {
    let imageDetails = image.image;
    if (user && user.admin) {
      deleteOption = <DeleteButton service={deleteImage} id={imageDetails.id} />;
    }

    imageTile = (
      <div className="image-tile">
        {deleteOption}
        <img src={imageDetails.image} alt={imageDetails.title} />
        {imageDetails.title}
        {imageDetails.medium}
        {imageDetails.dimensions}
      </div>
    );
  }

  return imageTile;
};

export default ImageTile;
