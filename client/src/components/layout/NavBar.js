import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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

  const instagramLink = (
    <a href="https://www.instagram.com/sylvie__mayer/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="navlink instagram" />
    </a>
  );

  return (
    <div className="NavBar">
      <Link to="/" className="navlink">
        Sylvie Mayer
      </Link>
      <Link to="/paintings" className="navlink">
        Paintings
      </Link>
      <Link to="/about" className="navlink">
        About
      </Link>
      <Link to="/cv" className="navlink">
        CV
      </Link>
      <Link to="/contact" className="navlink">
        Contact
      </Link>
      {instagramLink}
      {newImageButton}
      {newExperienceButton}
      {signoutButton}
    </div>
  );
};

export default NavBar;
