import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ali.yusuf01@hotmail.com?subject=Message from ${formData.name} (${formData.email})&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <button
        onClick={() => navigate("/")}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 font-semibold"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Back to Portfolio
      </button>
      <h2 className="text-3xl font-extrabold mb-6 text-blue-700 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v1m0 0v1m0-1h-4m4 0h4m-4 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        Contact Me
      </h2>
      <form
        action="https://formspree.io/f/xpwldbna"
        method="POST"
        className="space-y-6"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-sm font-semibold text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition duration-200 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-500 text-sm">
        Or email me directly at <a href="mailto:ali.yusuf01@hotmail.com" className="text-blue-600 underline">ali.yusuf01@hotmail.com</a>
      </div>
    </div>
  );
}
