import React from "react";
import { ShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";

const product = [
  {
    id: 1,
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b429cdcc-f314-46e4-806b-17160c0ab0e6/air-force-1-07-shoes-5fFrTT.png",
    productName: "Nike Air Force 1 '07",
    imgUrl2: "https://www.nike.com/in/t/air-force-1-07-shoes-5fFrTT/FQ4296-101",
    price: 9695,
    desc: "Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction pairs with contrasting colours for style that tracks whether you're on court or on the go.",
    SliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee4c42cb-181c-400c-bd5f-c63dd237f686/air-force-1-07-shoes-5fFrTT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/078ae1bd-9d33-464b-94fb-5c55eac3ddb2/air-force-1-07-shoes-5fFrTT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/edbe9354-e100-4a71-80e3-13f4a3814d01/air-force-1-07-shoes-5fFrTT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b984b52-51fb-40cb-bc51-0997aa050aa4/air-force-1-07-shoes-5fFrTT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a1ee54be-e73e-4c64-a87c-f0efb6baa0d6/air-force-1-07-shoes-5fFrTT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5fedad6a-60c2-40a2-b9db-8b603efb8582/air-force-1-07-shoes-5fFrTT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f50e8c3f-bdad-42b5-bcea-ff132434b0f5/air-force-1-07-shoes-5fFrTT.png",
    ],
  },
  {
    id: 2,
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/355cb752-6f3c-4071-b8c2-20d74d15387a/waffle-nav-shoes-4j1X82.png",
    productName: "Nike Waffle Nav",
    imgUrl2: "https://www.nike.com/in/t/waffle-nav-shoes-4j1X82/FJ4195-400",
    price: 7095,
    desc: "Retro gets modernised with these sleek sneakers inspired by the Nike Daybreak. Era-echoing suede and nylon are paired in complementary colours, and the updated wedge midsole gives you an extra lift. Style, comfort, that iconic Waffle outsole—this is a perfect new addition to your daily rotation.",
    SliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/35891ad9-93c6-48fd-85c0-4444983fb831/waffle-nav-shoes-4j1X82.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/66d2c719-b6de-497f-862a-a1f8fa8559b4/waffle-nav-shoes-4j1X82.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/39329d4e-c65c-428f-95e9-ba8efce88b36/waffle-nav-shoes-4j1X82.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a85796ae-9a7d-4143-b00c-3b2d6a881f7c/waffle-nav-shoes-4j1X82.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1e3f841e-2eff-4eac-9c60-e9fbc98ae243/waffle-nav-shoes-4j1X82.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/de4dd5b1-a0a6-46ac-a0ab-d3c4aaa3b463/waffle-nav-shoes-4j1X82.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/345b0060-ed04-43e2-99db-7c695ee58ffc/waffle-nav-shoes-4j1X82.png",
    ],
  },
  {
    id: 3,
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/edc337d0-3359-4198-8602-208fcde1b69a/air-max-excee-shoe-lPbXqt.png",
    productName: "Nike Air Max Excee",
    imgUrl2: "https://www.nike.com/in/t/air-max-excee-shoe-lPbXqt/CD4165-003",
    price: 7995,
    desc: "Inspired by the Nike Air Max 90, the Nike Air Max Excee is a celebration of a classic through a new lens. Elongated lines and distorted proportions on the upper bring the '90s look you love into a new, modern space.",
    SliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/68a565b8-baf4-4bce-b8f6-62e0d50dd1e3/air-max-excee-shoe-lPbXqt.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/681ee2a9-880a-4bc0-a45b-45b806e1b8b7/air-max-excee-shoe-lPbXqt.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bf0ba8c7-740e-4fe7-bbc0-215147a4c99b/air-max-excee-shoe-lPbXqt.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/335da9c8-85ce-4cb2-abe4-633d5dac06c7/air-max-excee-shoe-lPbXqt.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c97d3fa-784b-49b3-8f14-0b765b59123a/air-max-excee-shoe-lPbXqt.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fcf54e3d-4ef0-4cba-8dba-56cb9a37b147/air-max-excee-shoe-lPbXqt.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee078797-a8c6-4030-8b26-44639d22596f/air-max-excee-shoe-lPbXqt.png",
    ],
  },
  {
    id: 4,
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5aacbdb1-2321-4b59-8b15-4d53527b5475/jordan-stadium-90-shoes-Jn6ZH4.png",
    productName: "Jordan Stadium 90",
    imgUrl2:
      "https://www.nike.com/in/t/jordan-stadium-90-shoes-Jn6ZH4/DX4397-116",
    price: 12795,
    desc: "Comfort is king, but that doesn't mean you have to sacrifice style. Taking design inspiration from the AJ1 and AJ5, the Stadium 90 is ready for everyday wear. The upper is made from leather and airy woven, so you get both breathability and durability, and Nike Air cushioning in the sole keeps your every step light and cushioned.",
    SliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6a6f3d8e-573e-4f0d-a029-5c9a5512e352/jordan-stadium-90-shoes-Jn6ZH4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6a1634bc-5801-407e-9941-4f42ced6f54f/jordan-stadium-90-shoes-Jn6ZH4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6c4077d7-2485-40dd-8272-c6d1172e9eb0/jordan-stadium-90-shoes-Jn6ZH4.pngg",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33f80c80-f5d8-47a9-8039-9f93c144ebd2/jordan-stadium-90-shoes-Jn6ZH4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bf7ed40c-cba8-46ae-9e88-02e3c484e2fa/jordan-stadium-90-shoes-Jn6ZH4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d8444fdd-50a1-4067-a369-740921bce2e6/jordan-stadium-90-shoes-Jn6ZH4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc941337-48aa-4931-91ce-619ce5554cbb/jordan-stadium-90-shoes-Jn6ZH4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2496f2f3-d429-475b-ab8b-9f02b6f8a02e/jordan-stadium-90-shoes-Jn6ZH4.png",
    ],
  },
];

const NewArrival = () => {
  return (
    <>
      <div className="bg-zinc-100 py-16">
        <h1 className="flex text-4xl font-bold justify-center">New Arrivals</h1>

        <div>
          <div className="container flex flex-wrap mx-auto justify-center">
            {product.map((item) => {
              return (
                <div
                  className="item m-3 text-center border border-slate-100"
                  key={item.id}
                >
                  <div className="object-cover w-72 max-md:w-44 max-sm:w-36">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="w-full max-md:h-48 max-sm:h-40 object-cover"
                    />
                  </div>

                  <p>{item.productName}</p>
                  <p className="font-semibold">MRP: ₹ {item.price}</p>
                  <div className="flex flex-col justify-center relative">
                    <button className=" text-sm max-md:text-xs font-bold w-full bg-black h-[40px] max-md:h-[30px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                      Add to Cart
                      <ShoppingCart className="mx-2 scale-90 max-md:scale-75" />
                    </button>

                    <button className=" text-sm max-md:text-xs font-bold w-full  bg-zinc-300 h-[40px] max-md:h-[30px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black hover:text-zinc-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
                      Buy Now
                      <ShoppingCartCheckout className="mx-2 scale-90 max-md:scale-75" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
