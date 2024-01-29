import React, { useState, useEffect } from "react";
import getYears from "../../services/getYears";
import YearsList from "./YearsList";
import TitlesList from "./TitlesList";
import ImageTile from "./ImageTile";

const Paintings = (props) => {
  const [years, setYears] = useState([]);
  const [titles, setTitles] = useState([]);
  const [image, setImage] = useState(undefined);
  const [selectedYear, setSelectedYear] = useState(undefined);
  const [selectedTitle, setSelectedTitle] = useState(undefined);

  useEffect(() => {
    getYears().then((response) => {
      setYears(response.years);
    });
  }, []);

  return (
    <>
      <h1>Paintings</h1>
      <div className="grid-x grid-margin-x">
        <div className="cell medium-2">
          <YearsList
            years={years}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            setTitles={setTitles}
          />
        </div>
        <div className="cell medium-2">
          <TitlesList
            titles={titles}
            setImage={setImage}
            selectedTitle={selectedTitle}
            setSelectedTitle={setSelectedTitle}
          />
        </div>
        <div className="cell medium-6">
          <ImageTile image={image} user={props.user} />
        </div>
      </div>
    </>
  );
};

export default Paintings;
