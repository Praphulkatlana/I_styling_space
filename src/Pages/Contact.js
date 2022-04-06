import React, { useState } from "react";
import emailkey from "../emailkey";
import emailjs from "emailjs-com";
import { useToasts } from "react-toast-notifications";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [message, setmessage] = useState("");
  const { addToast } = useToasts();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        emailkey.SERVICE_ID,
        emailkey.TEMPLATE_ID,
        e.target,
        emailkey.USER_ID
      )
      .then(
        (result) => {
          addToast("Message Sent, We will get back to you shortly", {
            appearance: "success",
            autoDismiss: true,
            autoDismissTimeout: 4000,
          });

          setname("");
          setemail("");
          setmessage("");
          setnumber("");
        },
        (error) => {
          addToast("An error occurred, Please try again", {
            appearance: "success",
            autoDismiss: true,
            autoDismissTimeout: 4000,
          });
        }
      );
  };
  return (
    <div id="contact_div">
      <h1>Contact Us</h1>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Name"
          name="from_name"
          className="form_item"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        ></input>
        <br></br>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="form_item"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        ></input>
        <br></br>
        <input
          type="number"
          placeholder="Number"
          name="phone"
          className="form_item"
          value={number}
          onChange={(e) => setnumber(e.target.value)}
          required
        ></input>
        <br></br>
        <textarea
          placeholder="Comment"
          name="message"
          className="form_item"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        ></textarea>
        <br></br>
        <button className="form_btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
