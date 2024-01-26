import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  let authenticatedListItems = <></>;

  if (user) {
    authenticatedListItems = [
      <li key="sign-out">
        <SignOutButton />
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
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">{authenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
