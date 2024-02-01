import React from "react";
import DeleteButton from "../layout/DeleteButton";
import deleteExperience from "../../services/deleteExperience";

const ExperienceTile = (props) => {
  const { user, id, title, description } = props;
  let deleteOption = <></>;

  if (user && user.admin) {
    deleteOption = <DeleteButton service={deleteExperience} id={id} />;
  }

  return (
    <div>
      {deleteOption}
      <h2>{title}</h2>
      <p>{`${description}`}</p>
    </div>
  );
};

export default ExperienceTile;
