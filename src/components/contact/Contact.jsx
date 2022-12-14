import React from 'react'
import { useState } from 'react';
import "./contact.scss"

export default function Contact() {
const [message, setMessage]= useState(false);
  const handleSubmit = (e)=>{
    // e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id='contact'>
    <div className="left">
        <img src="assets/shake.svg" alt="" />
    </div>
    <div className="right">
      <h2>Contact.</h2>
      <form name="contact" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
          {/* <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea> */}
          <p>
            <label> <input type="text" name="name" placeholder="Your Name"/></label>
          </p>
          <p>
            <label> <input type="email" name="email" placeholder="Your Email"/></label>
          </p>
          <p>
            <label > <textarea name="message" placeholder="Message"></textarea></label>
          </p>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :))</span>}
      </form>
    </div>
    </div>
  )
}
