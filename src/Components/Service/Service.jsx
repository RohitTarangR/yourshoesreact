import React from 'react'
import Navbar from '../Home/Navbar'
import Stores from '../Home/Stores';
import Footer from '../Footer/Footer';

import ServiceBanner from "../../Assests/img/servicebanner.jpg"

// const shoes = [
//   {
//     id: 1,
//     name: "Shoe 1",
//     description: "This is shoe 1",
//     image: "shoe1.jpg",
//     price: "$100",
//   },
//   {
//     id: 2,
//     name: "Shoe 2",
//     description: "This is shoe 2",
//     image: "shoe2.jpg",
//     price: "$120",
//   },
//   {
//     id: 3,
//     name: "Shoe 3",
//     description: "This is shoe 3",
//     image: "shoe3.jpg",
//     price: "$150",
//   },
// ];

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <img
          src={ServiceBanner}
          alt=""
          className="relative h-[100%] w-[100%] object-cover"
        />
        <h1 className="text-center text-9xl font-semibold text-white absolute my-5 border border-white p-5 max-xl:text-8xl max-lg:text-6xl max-md:text-3xl max-md:p-2 max-sm:text-2xl">
          Service
        </h1>
      </div>

      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-10">Our Shoes</h1>
        <div className="w-full flex flex-col items-center">
          {shoes.map((shoe) => (
            <div
              key={shoe.id}
              className="w-1/2 p-4 mb-4 bg-white rounded shadow"
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h2 className="text-2xl font-bold mb-2">{shoe.name}</h2>
              <p className="mb-2">{shoe.description}</p>
              <p className="mb-4 font-bold">{shoe.price}</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4">
                Details
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div> */}


      <Stores />
      <Footer />
    </>
  );
}

export default Service;