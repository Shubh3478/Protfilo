import './contact.css';
import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const formRef = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert('Please verify the CAPTCHA before submitting.');
      return;
    }

    emailjs
      .sendForm(
        'service_fv8bw37', 
        'template_ixajxg3', 
        formRef.current,
        '4I8BhP99kkCRGbFGQ' 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks, I'll reply ASAP :)");
        },
        (error) => {
          console.error(error.text);
          alert('Something went wrong. Please try again.');
        }
      );

    e.target.reset();
    setCaptchaVerified(false); 
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond ASAP if a valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ashoutoshtiwari0786@gmail.com</h5>
            <a href="mailto:ashoutoshtiwari0786@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="7"
            name="message"
            required
          ></textarea>

          <ReCAPTCHA
            sitekey="6LfuY6wrAAAAAE1MnoCwnj6D1EWlSzmnJV7B6_WO" 
            onChange={handleCaptchaChange}
            className="captcha"
          />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
