import React from "react";
import YearTile from "./YearTile";

const YearsList = (props) => {
  const { years, selectedYear, setSelectedYear, setTitles, setImages } = props;

  const yearTiles = years.map((year) => {
    return (
      <YearTile
        key={year}
        year={year}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        setTitles={setTitles}
        setImages={setImages}
      />
    );
  });

  return <div className="years-list">{yearTiles}</div>;
};

export default YearsList;
