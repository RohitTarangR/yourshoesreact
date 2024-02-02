import React from "react";
import Navbar from "../Home/Navbar";
import Stores from "../Home/Stores";
import Footer from "../Footer/Footer";
import AboutBanner from "../../Assests/img/aboutBanner.png"
// import Team from "./Team";
import { TeamMem } from "../../data";
import Team from "./Team";


const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <img
          src={AboutBanner}
          alt=""
          className="relative h-[100%] w-[100%] object-cover"
        />
        <h1 className="text-center text-9xl font-semibold text-white absolute my-5 border border-white p-5 max-xl:text-8xl max-lg:text-6xl max-md:text-3xl max-md:p-2 max-sm:text-2xl ">
          About Us
        </h1>
      </div>

      <h2 className="text-4xl font-bold  m-8 text-center">Our Team</h2>
      <div className="flex flex-wrap">
        {TeamMem.map((TeamMem) => {
          return (
            <>
              <Team TeamMem={TeamMem} />
            </>
          );
        })}
      </div>

      <Stores />
      <Footer />
    </>
  );
};

export default About;
