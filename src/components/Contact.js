import React, { useState } from "react";
import emailjs from "emailjs-com";
import GithubLogo from "../images/githubwhite.png";
import LinkedInLogo from "../images/linkedInwhite.png";

const Contact = React.forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // const { name, email, message } = this.state;

    const templateParams = {
      from_name: name,
      message: message,
      reply_to: email,
    };

    emailjs
      .send(
        "service_u99ljg5",
        "template_zeduylj",
        templateParams,
        "user_pKVmy69V6k2haXqcrNiM3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="contact" ref={ref}>
      <form id="contact-form" onSubmit={sendEmail} method="POST">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          className="form-control-message"
          rows="6"
          cols="15"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <div class="links">
        <a href="https://github.com/nongrubl89">
          <img src={GithubLogo} alt="GitHub"></img>
        </a>
        <a href="https://www.linkedin.com/in/lisaburgnon/">
          <img src={LinkedInLogo} alt="LinkedIn"></img>
        </a>
      </div>
    </div>
  );
});

export default Contact;
