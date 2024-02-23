import React from 'react'
import SideBar from './SideBar'
import Navbar from '../Home/Navbar';
import { items } from '../../data';
import { KeyboardArrowDown, ShoppingCart, Tune } from "@mui/icons-material/";

const ProductWomen = () => {

  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White" },
        { value: "beige", label: "Beige" },
        { value: "blue", label: "Blue" },
        { value: "brown", label: "Brown" },
        { value: "green", label: "Green" },
        { value: "purple", label: "Purple" },
      ],
    },
    {
      id: "category",
      name: "Category",
      options: [
        { value: "new-arrivals", label: "All New Arrivals" },
        { value: "tees", label: "Tees" },
        { value: "crewnecks", label: "Crewnecks" },
        { value: "sweatshirts", label: "Sweatshirts" },
        { value: "pants-shorts", label: "Pants & Shorts" },
      ],
    },
    {
      id: "sizes",
      name: "Sizes",
      options: [
        { value: "xs", label: "XS" },
        { value: "s", label: "S" },
        { value: "m", label: "M" },
        { value: "l", label: "L" },
        { value: "xl", label: "XL" },
        { value: "2xl", label: "2XL" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 m-5 ">
          <SideBar />
        </div>
        <div className="flex flex-col my-4">
          <div className="mr-10 space-x-6 flex justify-end items-center">
            <button>
              Hide Filters
              <Tune className="mx-1" />
            </button>
            <button>
              Sort By
              <KeyboardArrowDown />
            </button>
          </div>
          <div class="container flex flex-wrap mx-auto justify-center">
            {items.map((item, i) => {
              return (
                <div
                  class="item m-3 text-center border border-slate-100"
                  key={i}
                >
                  <div className="object-cover w-72">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="w-full"
                    />
                  </div>
                  <p>{item.productName}</p>
                  <p className="font-semibold">MRP: ₹ {item.price}.00</p>
                  <div className="flex justify-center">
                    <button className="font-bold w-full bg-black h-[40px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                      Cart
                    </button>
                    {/* <button className="font-bold w-[40%] bg-black h-[40px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                      Buy Now
                    </button> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="flex justify-evenly">
            {FeaturedProd.map(() => {
              return <SinProduct FeaturedProd={FeaturedProd} />;
            })}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ProductWomen