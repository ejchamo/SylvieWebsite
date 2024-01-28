import React from "react";
import getImage from "../../services/getImage";

const TitleTile = (props) => {
  const { title, setImage, selectedTitle, setSelectedTitle } = props;

  const handleClick = () => {
    setSelectedTitle(title);
    getImage(title).then((response) => {
      console.log("reponse in titletile", response);
      setImage(response);
    });
  };

  let isSelected = "";

  if (title === selectedTitle) {
    isSelected = "selected-title";
  }

  return (
    <div className={isSelected} onClick={handleClick}>
      <h1>{title}</h1>
    </div>
  );
};

export default TitleTile;
