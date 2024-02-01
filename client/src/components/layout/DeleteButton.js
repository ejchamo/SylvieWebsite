import React from "react";

const DeleteButton = (props) => {
  const { service, id } = props;

  const handleDelete = async () => {
    try {
      await service(id);
      window.location.reload(true);
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
