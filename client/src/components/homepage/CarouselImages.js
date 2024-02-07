import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import getCarouselImages from "../../services/getCarouselImages";

const CarouselImages = (props) => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getCarouselImages().then((response) => {
      setImages(response.images);
    });
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imageItems = images.map((image) => {
    return (
      <Carousel.Item key={image.id}>
        <img className="d-block w-100" src={image.image} alt={image.alt} />
      </Carousel.Item>
    );
  });

  const imageOptions = images.map((image, i) => {
    return (
      <img
        key={i}
        src={image.image}
        alt={`Small slide ${i}`}
        onClick={() => setIndex(i)}
        style={{ width: "100px", cursor: "pointer" }}
      />
    );
  });

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imageItems}
      </Carousel>
      {imageOptions}
    </>
  );
};

export default CarouselImages;
