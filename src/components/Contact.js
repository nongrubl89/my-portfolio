import React from "react";
import emailjs from "emailjs-com";
import GithubLogo from "../images/githublogo-1.png";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  sendEmail(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

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

    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  render() {
    return (
      <div className="contact">
        <h4>
          Get in touch below or find me on{" "}
          <img src={GithubLogo} alt="GitHub"></img>
        </h4>
        <form
          id="contact-form"
          onSubmit={this.sendEmail.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="form-control-message"
              rows="6"
              cols="20"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
