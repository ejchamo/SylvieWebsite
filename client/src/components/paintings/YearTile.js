import React from "react";
import getTitles from "../../services/getTitles";

const YearTile = (props) => {
  const { year, selectedYear, setSelectedYear, setTitles, setImages } = props;

  const handleClick = () => {
    setSelectedYear(year);
    getTitles(year).then((response) => {
      const titles = response.yearImages.map((image) => image.title);
      setTitles(titles);
      setImages(response.yearImages);
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
