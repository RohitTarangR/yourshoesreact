import React from 'react'

const ContactForm = () => {
  return (
    <>
      <form
        action=""
        className="flex flex-col justify-center items-center relative "
      >
        <h1 className="text-5xl font-bold max-lg:text-3xl">Contact Us</h1>
        <p className="w-[600px] max-md:w-[450px] max-md:mt-4 mt-10 mb-12">
          Please reach out to us in case of any concerns. Please fill out this
          form and we will get back to you at the earliest. Contact us for
          anything related to our company and services.
        </p>
        <p className="justify-start absolute max-md:top-40  top-44 left-2 text-green-500 font-bold ">
          Feel free to contact us*
        </p>
        <div className="flex">
          <input
            type="text"
            name=""
            id=""
            className="bg-[#e5e9eb] px-5 w-64 border h-12 outline-none max-md:w-48"
            placeholder="Name "
          />
          <input
            type="email"
            name=""
            id=""
            className="bg-[#e5e9eb] px-5 w-64 mx-5 border h-12 outline-none max-md:w-48"
            placeholder="Email "
          />
        </div>
        <input
          type="tel"
          name=""
          id=""
          className="bg-[#e5e9eb] px-5 mr-5 w-[600px] max-md:w-[455px]  my-3 border h-12 outline-none"
          placeholder="Phone Number"
        />
        <textarea
          name="comment"
          id=""
          cols=""
          rows="5"
          className="bg-[#e5e9eb] px-5 py-3 mr-5 w-[600px] max-md:w-[455px] border outline-none"
          placeholder="Comment"
        ></textarea>
        <button className="bg-black text-white hover:bg-green-600 transition-all duration-500 w-56 h-10 rounded-md mt-5">
          Send
        </button>
      </form>
    </>
  );
}

export default ContactForm