import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const NavBar = ({ user }) => {
  let signoutButton = <></>;
  let newImageButton = <></>;
  let newExperienceButton = <></>;

  if (user) {
    newImageButton = [
      <li key="new-image">
        <Link to="/new-image">New Image</Link>
      </li>,
    ];
    newExperienceButton = [
      <li key="new-experience">
        <Link to="/new-experience">New Experience</Link>
      </li>,
    ];
    signoutButton = [
      <li key="sign-out">
        <SignOutButton />
      </li>,
    ];
  }

  return (
    <div className="NavBar">
      <Link to="/">Sylvie Mayer</Link>
      <Link to="/paintings">Paintings</Link>
      <Link to="/cv">CV</Link>
      {newImageButton}
      {newExperienceButton}
      {signoutButton}
    </div>
  );
};

export default NavBar;
