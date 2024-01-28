import React from "react";

const ImageTile = (props) => {
  const { image } = props;

  let imageTile = <></>;

  if (image) {
    let imageDetails = image.image;
    imageTile = (
      <div>
        {imageDetails.medium}
        {imageDetails.dimensions}
        <img src={imageDetails.image} alt={imageDetails.title} />
      </div>
    );
  }

  return imageTile;
};

export default ImageTile;
