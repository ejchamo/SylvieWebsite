import React from "react";
import ImageTile from "./ImageTile";

const ImagesList = (props) => {
  const { images, user } = props;

  const imageTiles = images.map((image) => {
    return <ImageTile key={image.id} image={image} user={user} />;
  });

  return <div className="images-list">{imageTiles}</div>;
};

export default ImagesList;
