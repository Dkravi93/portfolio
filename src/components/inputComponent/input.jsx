import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_381fbjb', 'template_v6qpepg', form.current, 'QLDskRbVad7C7lLQx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br/>
      <input type="text" name="from_name" />
      <br/>
      <br/>
      <label>Email</label>
      <br/>
      <input type="email" name="from_email" />
      <br/>
      <br/>
      <label>Message</label>
      <br/>
      <textarea name="message" />
      <br/>
      <br/>
      <input type="submit" value="Send" />
    </form>
  );
};