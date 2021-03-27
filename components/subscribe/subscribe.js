/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import axios from "axios";
import classes from './subscribe.module.scss';
import { TextBox } from './../textbox/textbox';

export const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const handleFormSubmit = () => {
    axios
      .post(process.env.NEXT_PUBLIC_ENDPOINT_URL + "/posts/subscriber/add", {
        name,
        email,
        areaOfInterest: subject,
      })
      .then((response) => {
        if (response.data) {
          alert("Subscribed Sucessfully!");
          setName("");
          setEmail("");
          setSubject("");
        }
      });
  };
  return (
    <div className={classes.parent}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <span className={classes.smallText}>
              Sign Up for our top notch newsletter
            </span>
            <p className={classes.megaText}>The Deep Dive</p>
            <p className={classes.text}>
              Get the latest coverage of <b>advanced</b> web development
              straight into your inbox. Twice a month.
            </p>
            <p className={`${classes.smallText} ${classes.noMargin}`}>
              Follow Us
            </p>
            <div className={classes.inputRow}>
              <a target="_blank" href="https://www.linkedin.com/in/sks71093/">
                <Icon className={`fab fa-linkedin ${classes.icon}`} />
              </a>

              <a target="_blank" href="https://github.com/sks710931">
                <Icon className={`fab fa-github ${classes.icon}`} />
              </a>
              <a target="_blank" href="https://twitter.com/sks71093">
                <Icon className={`fab fa-twitter ${classes.icon}`} />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCgn9Vr0m5hRHCJd6IReuhzw"
              >
                <Icon className={`fab fa-youtube ${classes.icon}`} />
              </a>
              <a target="_blank" href="https://www.instagram.com/sks71093/">
                <Icon className={`fab fa-instagram ${classes.icon}`} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ width: "100%" }}>
              <div className={classes.inputRow}>
                <TextBox
                  label="Name"
                  name="name"
                  placeholder="Enter Your Name"
                  faIcon="far fa-user"
                  value={name}
                  onTextChange={(text) => setName(text)}
                  margin="marginRight"
                  spacing="10px"
                />
                <TextBox
                  label="Email"
                  name="email"
                  placeholder="Enter Your E-mail"
                  faIcon="far fa-envelope"
                  value={email}
                  onTextChange={(text) => setEmail(text)}
                  margin="marginLeft"
                  spacing="10px"
                />
              </div>
              <div className={classes.inputRow}>
                <TextBox
                  label="What are you interested in?"
                  name="interest"
                  placeholder="E.g. Javascript, Angular, React.."
                  value={subject}
                  onTextChange={(text) => setSubject(text)}
                />
              </div>
              <div className={classes.inputRow}>
                <button
                  onClick={handleFormSubmit}
                  className="btnSecondary"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

