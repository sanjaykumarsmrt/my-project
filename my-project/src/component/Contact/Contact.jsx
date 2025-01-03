import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xnnnoppl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormState({ email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5"
              placeholder="name@gmail.com"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-white"
            >
              Message
            </label>
            <textarea
              rows="6"
              id="message"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment"
              value={formState.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,165,0,0.7)] rounded-full text-lg">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-white">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
