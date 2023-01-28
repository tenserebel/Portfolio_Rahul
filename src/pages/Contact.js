import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import Layout from "../Components/Layout";
import swal from "sweetalert";
import "../styles/contact.css";
import { Button } from "semantic-ui-react";
import { TextField } from "@material-ui/core";
import { useTitle } from "../Components/Title";

const Contact = () => {
  useTitle("Contact");
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // alert("Working");
    send(
      process.env.REACT_APP_SERVICE_KEY,
      process.env.REACT_APP_TEMPLATE_KEY,
      toSend,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then((response) => {
        swal("SUCCESS!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        swal("FAILED...");

        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div>
        <h1 className="font-style-header-project">Contacts</h1>
        <form onSubmit={onSubmit}>
          <div className="textfieldCard">
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="Senders Name"
                variant="outlined"
                type="text"
                name="from_name"
                placeholder="from name"
                value={toSend.from_name}
                onChange={handleChange}
                focused
                inputProps={{ style: { color: "#de7bff" } }}
                fullWidth
              />
            </div>
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="Receivers Name"
                variant="outlined"
                type="text"
                name="to_name"
                placeholder="to name"
                value={toSend.to_name}
                onChange={handleChange}
                focused
                fullWidth
                inputProps={{ style: { color: "#de7bff" } }}
              />
            </div>
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                type="text"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
                focused
                fullWidth
                inputProps={{ style: { color: "#de7bff" } }}
              />
            </div>
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                type="text"
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
                focused
                fullWidth
                inputProps={{ style: { color: "#de7bff" } }}
              />
            </div>
            <div>
              <Button
                type="submit"
                color="purple"
                style={{ "margin-bottom": "2em" }}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
        <div>
          <hr className="hr5"></hr>
          <div>
            <p className="or-text-clause">Connect through different medium</p>
            <div style={{ "margin-bottom": "2em" }}>
              <a
                target="_blank"
                href="https://leetcode.com/RahulGupta77/"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"
                  alt="Leetcode"
                  className="contact-img"
                />
              </a>
              <a
                target="_blank"
                href="https://github.com/RahulGupta77"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://img.icons8.com/bubbles/48/null/github.png"
                  alt="github"
                  className="contact-img"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rahul-gupta-aa60611a7/"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png"
                  alt="linkedin"
                  className="contact-img"
                />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/rahulguptaa29"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://img.icons8.com/color/48/null/twitter--v1.png"
                  alt="Twitter"
                  className="contact-img"
                />
              </a>
              <a
                target="_blank"
                href="mailto:rg3498104@gmail.com"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://img.icons8.com/fluency/48/null/gmail.png"
                  alt="Gmail"
                  className="contact-img"
                />
              </a>
              <a
                target="_blank"
                href="https://wa.me/9561976966"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://img.icons8.com/color/48/null/whatsapp--v1.png"
                  alt="Whatsapp"
                  className="contact-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
