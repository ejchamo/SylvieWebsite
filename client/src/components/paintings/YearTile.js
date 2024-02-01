import React from "react";
import getTitles from "../../services/getTitles";

const YearTile = (props) => {
  const { year, selectedYear, setSelectedYear, setTitles } = props;

  const handleClick = () => {
    setSelectedYear(year);
    getTitles(year).then((response) => {
      setTitles(response.titles);
    });
  };

  let isSelected = "";

  if (year === selectedYear) {
    isSelected = "selected-year";
  }

  return (
    <div className={`year-tile ${isSelected}`} onClick={handleClick}>
      {year}
    </div>
  );
};

export default YearTile;
