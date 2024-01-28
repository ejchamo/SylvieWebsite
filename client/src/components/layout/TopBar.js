import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
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
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/paintings">Paintings</Link>
          </li>
          {newImageButton}
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">{signoutButton}</ul>
      </div>
    </div>
  );
};

export default TopBar;
