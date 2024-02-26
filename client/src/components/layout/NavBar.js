import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ user }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let signoutButton = <></>;
  let newImageButton = <></>;
  let newExperienceButton = <></>;
  let mobileMenu = <></>;

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

  let menuClassName = "";

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (window.innerWidth < 768) {
    mobileMenu = (
      <div className="mobileMenu" onClick={handleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    );
  }

  if (mobileMenuOpen) {
    menuClassName = "mobileMenu";
  }

  return (
    <>
      {mobileMenu}
      <div className={`NavBar ${menuClassName}`}>
        <Link to="/" className="navlink" onClick={handleMobileMenu}>
          Sylvie Mayer
        </Link>
        <Link to="/paintings" className="navlink" onClick={handleMobileMenu}>
          Paintings
        </Link>
        <Link to="/about" className="navlink" onClick={handleMobileMenu}>
          About
        </Link>
        <Link to="/cv" className="navlink" onClick={handleMobileMenu}>
          CV
        </Link>
        <Link to="/contact" className="navlink" onClick={handleMobileMenu}>
          Contact
        </Link>
        {instagramLink}
        {newImageButton}
        {newExperienceButton}
        {signoutButton}
      </div>
    </>
  );
};

export default NavBar;
