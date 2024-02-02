import React from "react";
import Navbar from "../Home/Navbar";
import Stores from "../Home/Stores";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
import contact from "../../Assests/img/contactus.jpg"
import {
  East,
  LocationOnOutlined,
  EmailOutlined,
  AccessTimeOutlined,
  LocalPhoneOutlined,
} from "@mui/icons-material/";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="text-center bg-black text-white">
          <h1 className="max-lg:text-sm max-md:text-xs py-2">
            <Link to="/">
              Contact us for any updates or queries or anything which can make
              you fell better!
            </Link>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={contact}
            alt=""
            className="relative h-[100%] w-[100%] object-cover"
          />
          <h1 className="text-center text-9xl font-semibold text-white absolute my-5 border border-white p-5 max-xl:text-8xl max-lg:text-6xl max-md:text-3xl max-md:p-2 max-sm:text-2xl">
            Contact Us
          </h1>
        </div>
        <div className="bg-white text-black flex justify-center items-center py-10 w-full">
          <ContactForm />
        </div>
      </div>

      <div className="bg-[#e5e9eb] py-10 grid grid-cols-2 place-content-center place-items-center max-lg:grid-cols-1">
        <div>
          <iframe
          className="max-md:w-[400px]"
            title="ParivarHomes"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.773777714064!2d72.53749457596616!3d23.105375713231783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82df638cac99%3A0xff6323bffd52c2a7!2sPARIVAR%20HOMES%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1705140577031!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-96 ml-10 ">
          <div className="flex  my-10">
            <LocationOnOutlined />
            <p className="ml-3">
              <span className="font-semibold text-lg">Our Office Address</span>{" "}
              <br /> Parivar Homes, Near Devnagar Gam, Sarkhej - Gandhinagar
              Hwy, behind Vodafone Tower, Gota, Ahmedabad, Gujarat 382481
            </p>
          </div>
          <div className="flex my-10">
            <EmailOutlined />
            <p className="ml-3">
              <span className="font-semibold text-lg">General Inquiries</span>{" "}
              <br /> yourshoes@gmail.com
            </p>
          </div>
          <div className="flex  my-10">
            <LocalPhoneOutlined />
            <p className="ml-3">
              <span className="font-semibold text-lg">Call Us</span> <br />{" "}
              (+91) 7041798990
            </p>
          </div>
          <div className="flex  my-10">
            <AccessTimeOutlined />
            <p className="ml-3">
              <span className="font-semibold text-lg">Our Timing</span> <br />{" "}
              Mon-Sun: 10:00 AM - 07:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-black text-white py-10">
        <h1 className="py-3 text-3xl font-semibold">Subscribe to our emails</h1>
        <p className="py-3 text-lg">
          Be the first to know about new collections and exclusive offers.
        </p>

        <div className="relative">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="w-96 h-10 px-5 my-3 outline-none bg-black border border-white text-white rounded-md "
          />
          <East className="absolute top-5 right-4 hover:scale-75 transition-all duration-300 cursor-pointer" />
        </div>
      </div>

      <Stores />
      <Footer />
    </>
  );
};

export default Contact;
