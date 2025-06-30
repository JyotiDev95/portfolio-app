// src/components/Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_xxx', // Replace with your EmailJS service ID
        'template_xxx', // Replace with your EmailJS template ID
        formData,
        'user_xxx' // Replace with your EmailJS user/public key
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
      });
  };

  return (
    <section id="contact" className="pt-24 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-5xl font-extrabold mb-6 text-gray-700 dark:text-white">Let's Connect</h2>
          <div className="h-1 w-52 mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-transparent rounded-full"></div>
          <p className="text-gray-400 text-xl italic">
            Have a question or an idea? <br />Reach out—let's turn it into something amazing together!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-8 rounded-xl shadow-md space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Name*</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Email*</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Message*</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold rounded-full bg-zinc-800 border-2 border-zinc-600 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-black transition"
          >
            Send Message →
          </button>

          {submitted && (
            <p className="text-green-400 text-sm mt-4">Thank you! Your message has been sent.</p>
          )}
        </form>
      </div>
      <div className='border border-pink-500 border-spacing-1 bg-black py-4 px-8 rounded-lg flex max-w-6xl mx-auto mt-16 justify-between items-center'>
  {/* Left: Brand Text */}
  <div className="left-brand">
    <p className="text-white text-sm sm:text-base">Designed & Built by Jyoti Prakash</p>
  </div>

  {/* Right: Social Icons */}
  <div className="right-brand flex gap-4 items-center">
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/jyoti-prakash-8287151bb/" target="_blank" rel="noopener noreferrer">
      <svg fill="currentColor" height="24" width="24" viewBox="0 0 24 24" className="text-white hover:text-pink-400 transition">
        <path d="M20.452 20.452h-3.554v-5.568c0-1.328-.026-3.038-1.85-3.038-1.85 0-2.133 1.444-2.133 2.938v5.668H9.361V9h3.415v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.599 0 4.264 2.368 4.264 5.452v6.289zM5.337 7.433C4.193 7.433 3.27 6.507 3.27 5.367c0-1.14.923-2.066 2.067-2.066s2.066.926 2.066 2.066c0 1.14-.926 2.066-2.066 2.066zM6.859 20.452H3.813V9h3.046v11.452z" />
      </svg>
    </a>

    {/* GitHub */}
    <a href="https://github.com/JyotiDev95" target="_blank" rel="noopener noreferrer">
      <svg fill="currentColor" height="24" width="24" viewBox="0 0 30 30" className="text-white hover:text-pink-400 transition">
        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
      </svg>
    </a>

    {/* Email */}
    <a href="mailto:jyotiprakash0737@gmail.com" target="_blank" rel="noopener noreferrer">
      <svg fill="currentColor" height="24" width="24" viewBox="0 0 32 32" className="text-white hover:text-pink-400 transition">
        <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"></path>
        <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"></path>
      </svg>
    </a>

    {/* CodePen */}
    <a href="https://codepen.io/Jyoti-prakash" target="_blank" rel="noopener noreferrer">
      <svg fill="currentColor" height="24" width="24" viewBox="0 0 50 50" className="text-white hover:text-pink-400 transition">
        <path d="M25 4L4 17.34375V32.652344L25 46l21-13.34375V17.34375L25 4zm0 25.183594L19.066406 25.070313 25 21.023438 30.933594 25.070313 25 29.183594zM27 17.605469V9.949219l13.429688 8.535156-6.019532 4.171875L27 17.605469zM23 17.605469l-7.410156 5.050781-6.019531-4.171875L23 9.949219v7.65625zM12.09375 25.042969L8 27.832031V22.203125L12.09375 25.042969zM15.570313 27.453125L23 32.605469V40.050781L9.589844 31.527344l5.980469-4.074219zM27 32.605469l7.429688-5.152344 5.980468 4.074219L27 40.050781v-7.445312zM37.90625 25.042969L42 22.203125v5.628906L37.90625 25.042969z"/>
      </svg>
    </a>
  </div>
</div>

    </section>
  );
};

export default Contact;
