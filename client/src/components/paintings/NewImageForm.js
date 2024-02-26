import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Dropzone from "react-dropzone";

const NewImageForm = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [newImage, setNewImage] = useState({
    title: "",
    year: "",
    medium: "",
    dimensions: "",
    image: {},
    order: "",
    carousel: false,
  });

  const postImage = async (newImageData) => {
    const newImageBody = new FormData();
    newImageBody.append("title", newImage.title.trim());
    newImageBody.append("year", newImage.year);
    newImageBody.append("medium", newImage.medium);
    newImageBody.append("dimensions", newImage.dimensions);
    newImageBody.append("image", newImage.image);
    newImageBody.append("order", newImage.order);
    newImageBody.append("carousel", newImage.carousel);

    try {
      const response = await fetch("/api/v1/images", {
        method: "POST",
        headers: {
          Accept: "image/jpeg",
        },
        body: newImageBody,
      });
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      setShouldRedirect(true);
    } catch (error) {
      console.error(`Error in addImage Fetch: ${error.message}`);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to="/paintings" />;
  }

  const handleInputChange = (event) => {
    setNewImage({
      ...newImage,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleImageUpload = (acceptedImage) => {
    setNewImage({
      ...newImage,
      image: acceptedImage[0],
    });
    const objectUrl = URL.createObjectURL(acceptedImage[0]);
    setImagePreviewUrl(objectUrl);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postImage(newImage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Image</h2>
      <label>
        Image Title:
        <input type="text" name="title" onChange={handleInputChange} value={newImage.title} />
      </label>
      <label>
        Year:
        <input type="text" name="year" onChange={handleInputChange} value={newImage.year} />
      </label>
      <label>
        Medium:
        <input type="text" name="medium" onChange={handleInputChange} value={newImage.medium} />
      </label>
      <label>
        Dimensions:
        <input
          type="text"
          name="dimensions"
          onChange={handleInputChange}
          value={newImage.dimensions}
        />
      </label>
      <label>
        Display Size:
        <select name="displaySize" onChange={handleInputChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <label>
        Order:
        <input type="number" name="order" onChange={handleInputChange} value={newImage.order} />
      </label>
      <label>
        Carousel:
        <input
          type="checkbox"
          name="carousel"
          onChange={handleInputChange}
          value={!newImage.carousel}
        />
      </label>

      <Dropzone onDrop={handleImageUpload}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Upload Your Image - drag 'n' drop or click to upload</p>
              {imagePreviewUrl && <img src={imagePreviewUrl} alt="Image preview" />}
            </div>
          </section>
        )}
      </Dropzone>

      <input className="button" type="submit" value="Submit" />
    </form>
  );
};

export default NewImageForm;
