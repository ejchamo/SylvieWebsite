import React, { useState, useEffect } from "react";
import getAbout from "../../services/getAbout";

const About = (props) => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    getAbout().then((about) => {
      setAbout(about);
    });
  }, []);

  return (
    <div>
      <h1>About Me</h1>
      <p>{about.details}</p>
    </div>
  );
};

export default About;
