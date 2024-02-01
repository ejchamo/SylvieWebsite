import React from "react";
import TitleTile from "./TitleTile";

const TitlesList = (props) => {
  const { titles, setImage, selectedTitle, setSelectedTitle } = props;

  const titleTiles = titles.map((title) => {
    return (
      <TitleTile
        key={title}
        title={title}
        setImage={setImage}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
      />
    );
  });

  return <div className="titles-list">{titleTiles}</div>;
};

export default TitlesList;
