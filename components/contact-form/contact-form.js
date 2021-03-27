import React from "react";
import SimpleReactValidator from "simple-react-validator";
import { TextBox } from "./../textbox/textbox";
import { TextArea } from "./../textarea/textarea";
import axios from 'axios';

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSubject = this.setSubject.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  setName(e) {
    this.setState({ ...this.state, name: e });
    console.log(JSON.stringify(this.state));
  }
  setEmail(e) {
    this.setState({ ...this.state, email: e });
    console.log(JSON.stringify(this.state));
  }
  setSubject(e) {
    this.setState({ ...this.state, subject: e });
    console.log(JSON.stringify(this.state));
  }
  setMessage(e) {
    this.setState({ ...this.state, message: e });
    console.log(JSON.stringify(this.state));
  }

  submitForm() {
    if (this.validator.allValid()) {
      axios
      .post(process.env.NEXT_PUBLIC_ENDPOINT_URL + "/posts/contact/add", {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
      }) 
      .then((response) => {
        if (response.data) {
          this.setName("");
          this.setEmail("");
          this.setSubject("");
          this.setMessage("");
          this.props.onSubmitSuccess();
        }
      });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <TextBox
            autoComplete="on"
            label="Name"
            name="name"
            value={this.state.name}
            onTextChange={this.setName}
          />
          {this.validator.message("Name", this.state.name, "required", {
            className: "text-danger",
          })}
        </div>
        <div className="form-group">
          <TextBox
            autoComplete="on"
            label="Email"
            name="email"
            value={this.state.email}
            onTextChange={this.setEmail}
          />
          {this.validator.message("Email", this.state.email, "required|email", {
            className: "text-danger",
          })}
        </div>
        <div className="form-group">
          <TextBox
            label="Subject"
            name="subject"
            value={this.state.subject}
            onTextChange={this.setSubject}
          />
          {this.validator.message("Subject", this.state.subject, "required", {
            className: "text-danger",
          })}
        </div>
        <div className="form-group">
          <TextArea
            label="Message"
            name="message"
            value={this.state.message}
            onTextChange={this.setMessage}
          />
          {this.validator.message("Message", this.state.message, "required", {
            className: "text-danger",
          })}
        </div>
        <button className="btnPrimary" onClick={this.submitForm}>
          Send Message
        </button>
      </div>
    );
  }
}
