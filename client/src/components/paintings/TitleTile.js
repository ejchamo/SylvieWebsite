import React from "react";
import getImage from "../../services/getImage";

const TitleTile = (props) => {
  const { title, setImage, selectedTitle, setSelectedTitle } = props;

  const handleClick = () => {
    setSelectedTitle(title);
    getImage(title).then((response) => {
      setImage(response);
    });
  };

  let isSelected = "";

  if (title === selectedTitle) {
    isSelected = "selected-title";
  }

  return (
    <div className={`title-tile ${isSelected}`} onClick={handleClick}>
      {title}
    </div>
  );
};

export default TitleTile;
