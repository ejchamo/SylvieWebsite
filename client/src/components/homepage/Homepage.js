import React from "react";
import CarouselImages from "./CarouselImages";

const Homepage = (props) => {
  const { user } = props;
  return (
    <div>
      <h1>Homepage</h1>
      <CarouselImages user={user} />
    </div>
  );
};

export default Homepage;
