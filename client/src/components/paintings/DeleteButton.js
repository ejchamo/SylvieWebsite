import React from "react";
import deleteImage from "../../services/deleteImage";

const DeleteButton = (props) => {
  const { image } = props;

  const handleDelete = async () => {
    try {
      await deleteImage(image.id);
      location.href = "/paintings";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="button" onClick={handleDelete}>
      Delete
    </button>
  );
};
export default DeleteButton;
