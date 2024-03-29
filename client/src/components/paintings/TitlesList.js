import React from "react";
import TitleTile from "./TitleTile";

const TitlesList = (props) => {
  const { titles, selectedTitle, setSelectedTitle } = props;

  const titleTiles = titles.map((title) => {
    return (
      <TitleTile
        key={title}
        title={title}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
      />
    );
  });

  return <div className="titles-list">{titleTiles}</div>;
};

export default TitlesList;
