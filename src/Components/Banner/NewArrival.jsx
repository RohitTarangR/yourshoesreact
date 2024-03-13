import React from "react";
// import SingleProduct from '../Products/SingleProduct';
import { ShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";

const product = [
  {
    id: 1,
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b429cdcc-f314-46e4-806b-17160c0ab0e6/air-force-1-07-shoes-5fFrTT.png",
    imgUrl2: "https://www.nike.com/in/t/air-force-1-07-shoes-5fFrTT/FQ4296-101",
    productName: "Nike Air Force 1 '07",
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
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2acfa11a-19c8-4174-a0c8-eb760bea8934/air-force-1-07-shoes-7hqhpl.png",
    imgUrl2: "https://www.nike.com/in/t/air-force-1-07-shoes-7hqhpl/HF3836-100",
    productName: "Nike Air Force 1 '07",
    price: 10795,
    desc: "Score major style points with this legendary hoops classic. Crossing hardwood comfort with off-court flair, this AF-1 pairs smooth overlays with subtle pops of colour for nothing-but-net style. Hidden Air units and durable, era-echoing '80s construction add the comfort you know and love.",
    SliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/511be97e-c55b-4586-9520-ba5a037a3843/air-force-1-07-shoes-7hqhpl.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2afa818-3873-4243-8201-2a6173de2720/air-force-1-07-shoes-7hqhpl.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/31fe72f2-ea68-4cfa-a581-07a3dbe7383f/air-force-1-07-shoes-7hqhpl.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/439dd836-88ed-4d1e-bbba-b320fea3acba/air-force-1-07-shoes-7hqhpl.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30c629a1-fb35-4c19-8900-56bc775d9738/air-force-1-07-shoes-7hqhpl.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7b6c332a-6c72-4c9f-b974-bf3243d7be84/air-force-1-07-shoes-7hqhpl.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0678c1f-748e-496d-bab5-d67f215f2bb0/air-force-1-07-shoes-7hqhpl.png",
    ],
  },
  {
    id: 3,
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d33275b8-bee7-4041-81d5-1e5cbcaa6274/sb-janoski-slip-skate-shoes-BxN7w6.png",
    imUrl2:
      "https://www.nike.com/in/t/sb-janoski-slip-skate-shoes-BxN7w6/FN5893-001",
    productName: "Nike SB Janoski+ Slip",
    price: 7495,
    desc: "Slip into the next evolution of the Janoski+. None of the laces, all of the classic support. The skate-specific tread delivers great boardfeel and flick, while the re-engineered last gives you better fit and comfort—opening the door to next-level performance.",
    SliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52c87bb0-71f7-47ab-9845-72d96b12fb06/sb-janoski-slip-skate-shoes-BxN7w6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/42fea1e0-acb9-4e07-a3e9-3c3a5e6afe6c/sb-janoski-slip-skate-shoes-BxN7w6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c78ae25d-6749-42ab-b91f-f67ed2eef38d/sb-janoski-slip-skate-shoes-BxN7w6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f362b47-2b3a-4291-959f-255183692972/sb-janoski-slip-skate-shoes-BxN7w6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af15996f-7362-46d5-8c4b-1aaedca4b643/sb-janoski-slip-skate-shoes-BxN7w6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36352989-ec6b-4f86-bb78-915ed2bfffa1/sb-janoski-slip-skate-shoes-BxN7w6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/856bb679-ecd4-459b-a10f-39d8c606fa9d/sb-janoski-slip-skate-shoes-BxN7w6.png",
    ],
  },
  {
    id: 4,
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00b11c6b-7530-44c9-b712-ece6d77690a6/full-force-low-shoes-w2MKmW.png",
    imgUrl2: "https://www.nike.com/in/t/full-force-low-shoes-w2MKmW/FB1362-002",
    productName: "Nike Full Force Low",
    price: 8495,
    desc: "A new shoe with old-school appeal—your retro dreams just came true. This pared-back design references the classic AF-1, then leans into '80s style with throwback stitching and varsity-inspired colours. Not everything has to be a throwback, though—modern comfort and durability make them easy to wear any time, anywhere. Time to throw them on and go full force.",
    SliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72d7f34a-9b99-423a-9f28-7ec973441539/full-force-low-shoes-w2MKmW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43090ae2-c9bf-43b9-b6e9-991322cc91d7/full-force-low-shoes-w2MKmW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fab0b6cb-28cb-4ce0-9853-1f584eb777a4/full-force-low-shoes-w2MKmW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d69b24b-7b70-47bd-81eb-7fa16d2492f7/full-force-low-shoes-w2MKmW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/212d1e09-8b67-4f55-83d0-83f3e24ed03c/full-force-low-shoes-w2MKmW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/42e0c96a-259f-4545-ad2c-e0e67a8b3c6f/full-force-low-shoes-w2MKmW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55e0ceab-47cc-44e2-b8b6-392a25c341ee/full-force-low-shoes-w2MKmW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/18260607-d9d9-4818-924b-adc1203fd9e2/full-force-low-shoes-w2MKmW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bf63ee5a-71d8-4094-8d26-53a134db852e/full-force-low-shoes-w2MKmW.png",
    ],
  },
];

const NewArrival = () => {
  return (
    <>
      <div className="bg-zinc-100 py-16">
        <h1 className="flex text-4xl font-bold justify-center">New Arrivals</h1>

        <div>
          <div class="container flex flex-wrap mx-auto justify-center">
            {product.map((item, i) => {
              return (
                <div
                  class="item m-3 text-center border border-slate-100"
                  key={i}
                >
                  <div className="object-cover w-72 max-md:w-44">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="w-full max-md:h-48 object-cover"
                    />
                  </div>
                  <p>{item.productName}</p>
                  <p className="font-semibold">MRP: ₹ {item.price}.00</p>
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
