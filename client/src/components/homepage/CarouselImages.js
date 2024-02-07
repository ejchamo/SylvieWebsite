import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import getCarouselImages from "../../services/getCarouselImages";

const CarouselImages = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getCarouselImages().then((response) => {
      setImages(response.images);
    });
  }, []);

  console.log(images);

  const imageItems = images.map((image) => {
    return (
      <Carousel.Item key={image.id}>
        <img className="d-block w-100" src={image.image} alt={image.alt} />
        <Carousel.Caption>
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return <Carousel>{imageItems}</Carousel>;
};

export default CarouselImages;
