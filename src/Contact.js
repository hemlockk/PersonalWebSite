import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ali.yusuf01@hotmail.com?subject=Message from ${formData.name} (${formData.email})&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form
        action="https://formspree.io/f/xpwldbna"
        method="POST"
        className="space-y-4"
        >
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2"
            required
        />
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border rounded px-3 py-2"
            required
        />
        <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded px-3 py-2"
            required
        />
        <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Send
        </button>
        </form>
    </div>
  );
}
