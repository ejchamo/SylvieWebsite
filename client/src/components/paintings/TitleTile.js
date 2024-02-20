import React from "react";

const TitleTile = (props) => {
  const { title, selectedTitle, setSelectedTitle } = props;

  const handleClick = () => {
    setSelectedTitle(title);
    const imageElement = document.querySelector(`img[alt="${title}"]`);

    if (imageElement) {
      imageElement.scrollIntoView({ behavior: "smooth" });
    }
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
