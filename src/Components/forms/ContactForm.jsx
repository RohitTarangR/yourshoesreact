import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const PORT = 3001;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      await axios.post(`http://localhost:${PORT}/submitForm`, formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center relative"
      >
        <h1 className="text-5xl font-bold max-lg:text-3xl">Contact Us</h1>
        <p className="w-[600px] max-md:w-[450px] max-sm:w-[21.5rem] max-md:mt-4 mt-10 mb-12 text-justify">
          Please reach out to us in case of any concerns. Please fill out this
          form and we will get back to you at the earliest. Contact us for
          anything related to our company and services.
        </p>
        <p className="justify-start absolute max-lg:top-[10rem] max-md:top-40 max-sm:top-44 top-44 left-2 text-green-500 font-bold">
          Feel free to contact us*
        </p>
        <div className="flex">
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#e5e9eb] px-5 w-64 border h-12 outline-none max-md:w-48 max-sm:w-40"
            placeholder="Name"
            name="name"
          />
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#e5e9eb] px-5 w-64 mx-5 border h-12 outline-none max-md:w-48 max-sm:w-40"
            placeholder="Email"
            name="email"
          />
        </div>
        <input
          type="tel"
          value={formData.number}
          onChange={handleChange}
          className="bg-[#e5e9eb] px-5 mr-5 w-[600px] max-md:w-[455px] max-sm:w-[21.5rem] my-3 border h-12 outline-none"
          placeholder="Phone Number"
          name="number"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="bg-[#e5e9eb] px-5 py-3 mr-5 w-[600px] max-md:w-[455px] max-sm:w-[21.5rem] border outline-none resize-none"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white hover:bg-green-600 transition-all duration-500 w-56 h-10 rounded-md mt-5"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
