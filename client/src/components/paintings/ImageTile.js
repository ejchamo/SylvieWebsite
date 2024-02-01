import React from "react";
import DeleteButton from "./DeleteButton";

const ImageTile = (props) => {
  const { image, user } = props;

  let imageTile = <></>;
  let deleteOption = <></>;

  if (image) {
    let imageDetails = image.image;
    if (user && user.admin) {
      deleteOption = <DeleteButton image={image.image} />;
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
