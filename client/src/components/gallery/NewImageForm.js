import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Dropzone from "react-dropzone";

const NewImageForm = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [newImage, setNewImage] = useState({
    title: "",
    year: "",
    medium: "",
    dimensions: "",
    image: {},
  });

  const postImage = async (newImageData) => {
    const newImageBody = new FormData();
    newImageBody.append("title", newImage.title);
    newImageBody.append("year", newImage.year);
    newImageBody.append("medium", newImage.medium);
    newImageBody.append("dimensions", newImage.dimensions);
    newImageBody.append("image", newImage.image);

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
    return <Redirect push to="/gallery" />;
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

      <Dropzone onDrop={handleImageUpload}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Upload Your Image - drag 'n' drop or click to upload</p>
            </div>
          </section>
        )}
      </Dropzone>

      <input className="button" type="submit" value="Submit" />
    </form>
  );
};

export default NewImageForm;
