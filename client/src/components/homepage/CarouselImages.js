import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import getCarouselImages from "../../services/getCarouselImages";
import EditImageForm from "../paintings/EditImageForm";
import DeleteButton from "../layout/DeleteButton";
import deleteImage from "../../services/deleteImage";

const CarouselImages = (props) => {
  const { user } = props;
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editImage, setEditImage] = useState({});

  let editOption = <></>;
  let deleteOption = <></>;

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
    if (user && user.admin) {
      editOption = (
        <button
          className="button"
          onClick={() => {
            setEditImage(image);
            setIsEditing(!isEditing);
          }}
        >
          Edit
        </button>
      );

      deleteOption = <DeleteButton service={deleteImage} id={image.id} />;
    }

    return (
      <span key={i}>
        <img
          src={image.image}
          alt={`Small slide ${i}`}
          onClick={() => setIndex(i)}
          style={{ width: "75px", cursor: "pointer" }}
        />
        {editOption}
        {deleteOption}
      </span>
    );
  });

  if (isEditing) {
    return <EditImageForm image={editImage} setIsEditing={setIsEditing} />;
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imageItems}
      </Carousel>
      <div className="image-options">{imageOptions}</div>
    </>
  );
};

export default CarouselImages;
