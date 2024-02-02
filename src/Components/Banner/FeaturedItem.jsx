// import { Star } from "@mui/icons-material";
import React from "react";
// import shoes from "../../Assests/img/wshoes1.jpg"
// import { FeaturedProd } from "../../data";
import SinProduct from "../Products/SinProduct";

export const FeaturedProd = [
  {
    id: 1,
    title: "Product A",
    price: " ₹ 10 295.00",
    imgUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07d5448e-c263-4169-95ff-195c58804c33/air-jordan-1-low-se-shoes-ZbxSRp.png",
  },
  {
    id: 2,
    title: "Product A",
    price: " ₹ 11 395.00",
    imgUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a52f45b-1907-4809-8f8b-7849f4773b59/air-max-90-shoes-0MB5rJ.png",
  },
  {
    id: 3,
    title: "Product A",
    price: " ₹ 16 995.00",
    imgUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7cc09330-8e8f-49fa-a5c6-d3a11210bebd/air-more-uptempo-96-shoes-x7J3ls.png",
  },
  {
    id: 4,
    title: "Product A",
    price: " ₹ 11 895.00",
    imgUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eeaf64cb-2f09-455b-bd10-18f2e6b36a37/luka-2-bred-pf-basketball-shoes-LM9ScX.png",
  },
];

const FeaturedItem = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Our featured items
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          {
            FeaturedProd.map((FeaturedProd)=>{
                return (
                  <>
                    <SinProduct key={FeaturedProd.id} FeaturedProd={FeaturedProd} />
                  </>
                );
            })
          }
        </div>
      </div>
    </section>
  );
};
export default FeaturedItem;
