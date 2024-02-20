import React, { useState, useEffect } from "react";
import getYears from "../../services/getYears";
import getTitles from "../../services/getTitles";
import YearsList from "./YearsList";
import TitlesList from "./TitlesList";
import ImagesList from "./ImagesList";

const Paintings = (props) => {
  const { user } = props;
  const [years, setYears] = useState([]);
  const [titles, setTitles] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedYear, setSelectedYear] = useState(undefined);
  const [selectedTitle, setSelectedTitle] = useState(undefined);

  useEffect(() => {
    getYears().then((response) => {
      setYears(response.years);
      setSelectedYear(response.years[0]);
      getTitles(response.years[0]).then((response) => {
        const titles = response.yearImages.map((image) => image.title);
        setTitles(titles);
        setImages(response.yearImages);
      });
    });
  }, []);

  return (
    <div className="paintings-container">
      <div className="grid-x grid-margin-x">
        <div className="cell medium-1">
          <YearsList
            years={years}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            setTitles={setTitles}
            setImages={setImages}
          />
        </div>
        <div className="cell medium-1">
          <TitlesList
            titles={titles}
            setImages={setImages}
            selectedTitle={selectedTitle}
            setSelectedTitle={setSelectedTitle}
          />
        </div>
        <div className="cell medium-10">
          <ImagesList images={images} user={user} />
        </div>
      </div>
    </div>
  );
};

export default Paintings;
