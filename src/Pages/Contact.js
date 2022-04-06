import React, { useState } from "react";
import emailkey from "../emailkey";
import emailjs from "emailjs-com";
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [message, setmessage] = useState("");

  const sendEmail = (e) => {
    console.log("send");
    console.log(process.env.REACT_APP_EMAIL_USER_ID);
    console.log(emailkey.USER_ID);
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
          alert("Message Sent, We will get back to you shortly", result.text);
          setname("");
          setemail("");
          setmessage("");
          setnumber("");
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
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
