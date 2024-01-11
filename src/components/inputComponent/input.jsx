import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email) {
      toast.error("Please add all required fields!");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast.success("Wow, You Are Awesome! 😊😊😊");
            console.log(result.text);
          },
          (error) => {
            toast.error("Error, Working on it!");
            console.log(error.text);
          }
        );
      setFormData({ from_name: "", from_email: "", message: "" });
    }
  };

  return (
    <>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={(e) =>
            setFormData({ ...formData, from_name: e.target.value })
          }
        />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={(e) =>
            setFormData({ ...formData, from_email: e.target.value })
          }
        />
        <br />
        <br />
        <label>Message</label>
        <br />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <br />
        <br />
        <input type="submit" value="Send" />
      </form>
      <ToastContainer />
    </>
  );
};
