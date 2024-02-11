import React, { useState } from "react";
import sendEmail from "../../services/sendEmail";

//create a form to send an email

const ContactForm = () => {
  const [emailDetails, setEmailDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sendStatus, setSendStatus] = useState(false);

  const handleChange = (event) => {
    setEmailDetails({
      ...emailDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(emailDetails).then((response) => {
      if (response.message === "Email sent") {
        setSendStatus(true);
      }
    });
  };

  if (sendStatus) {
    return <h2>Email Sent</h2>;
  }

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={emailDetails.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={emailDetails.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={emailDetails.message} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
