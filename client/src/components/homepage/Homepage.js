import React from "react";
import CarouselImages from "./CarouselImages";

const Homepage = (props) => {
  const { user } = props;
  return (
    <div>
      <CarouselImages user={user} />
    </div>
  );
};

export default Homepage;
