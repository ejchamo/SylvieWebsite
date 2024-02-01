import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const NavBar = ({ user }) => {
  let signoutButton = <></>;
  let newImageButton = <></>;

  if (user) {
    signoutButton = [
      <li key="sign-out">
        <SignOutButton />
      </li>,
    ];
    newImageButton = [
      <li key="new-image">
        <Link to="/new-image">New Image</Link>
      </li>,
    ];
  }

  return (
    <div className="NavBar">
      <h4>Sylvie Mayer</h4>
      <Link to="/paintings">Paintings</Link>
      {newImageButton}
      {signoutButton}
    </div>
  );
};

export default NavBar;
