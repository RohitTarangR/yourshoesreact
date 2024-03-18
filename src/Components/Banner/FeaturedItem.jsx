// import { Star } from "@mui/icons-material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { ShoppingCart, ShoppingCartCheckout, Star } from "@mui/icons-material";

export const FeaturedProd = [
  {
    id: 1,
    title: "Nike Air Force 1 '07 LV8",
    price: 10795,
    desc: "Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction is paired with bold details for style that tracks whether you're on the court or on the go. Nature-inspired features like a canvas upper and special logo bloom from its AF-1 roots.",
    imgMain:
      "https://www.nike.com/in/t/air-force-1-07-lv8-shoes-fJ2txz/FJ4160-002",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7528b540-20bf-46bc-aa98-27ab0459cdbf/air-force-1-07-lv8-shoes-fJ2txz.png",
    sliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7cbbc064-e8a4-4cc6-848c-489d70ad3920/air-force-1-07-lv8-shoes-fJ2txz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16f6ae02-4228-4490-8bd5-2a878525b423/air-force-1-07-lv8-shoes-fJ2txz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f907dc0d-4546-4e4f-afd8-98165b083fb3/air-force-1-07-lv8-shoes-fJ2txz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ff532c6-e3cd-4beb-9b1b-ddbcf8fd074a/air-force-1-07-lv8-shoes-fJ2txz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/80a9147f-7f07-4748-af77-d0d2abb1fe2e/air-force-1-07-lv8-shoes-fJ2txz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb07d8cc-da42-4173-a99a-6ee12ae8b3e0/air-force-1-07-lv8-shoes-fJ2txz.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a4e9d9d6-3fa0-471f-8121-c7bd56bcc604/air-force-1-07-lv8-shoes-fJ2txz.png",
    ],
  },
  {
    id: 2,
    title: "Nike Air Max Ishod",
    price: 9695,
    desc: "Infused with elements taken from iconic '90s hoops shoes, the Air Max Ishod is built with all the durability you need to skate hard. This creative twist on the original Ishod design features updated mesh, exposed Nike Air (with Max Air technology) and a cupsole that breaks in easily. Now step in and skate like you mean it.",
    imgMain: "https://www.nike.com/in/t/air-max-ishod-shoes-pJPHs6/FB2393-103",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/34b0a307-58de-4934-9317-b767b2a518fd/air-max-ishod-shoes-pJPHs6.png",
    sliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d60d89cf-980c-4e0a-8df4-3294bcc57e94/air-max-ishod-shoes-pJPHs6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/037bd873-7451-4c67-aa81-44e2f486451b/air-max-ishod-shoes-pJPHs6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3e49037-943c-4185-beee-de72c983f306/air-max-ishod-shoes-pJPHs6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a0d1238-1b23-4742-a4df-feb0a1e0fa48/air-max-ishod-shoes-pJPHs6.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9d4d51cc-d75e-4f60-80d5-1cf1afc4f5c6/air-max-ishod-shoes-pJPHs6.png",
    ],
  },
  {
    id: 3,
    title: "Jordan Stadium 90",
    price: 12795,
    desc: "Comfort is king, but that doesn't mean you have to sacrifice style. Taking design inspiration from the AJ1 and AJ5, the Stadium 90 is ready for everyday wear. The upper is made from synthetic leather and textiles, sporting a combination of the AJ1 toe box and flame details from the AJ5. Nike Air cushioning makes every step as effortless as your style.",
    imgMain:
      "https://www.nike.com/in/t/jordan-stadium-90-shoes-vnsjwJ/HF5258-002",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a9576fbf-a2f7-432b-8cd6-38921319a456/jordan-stadium-90-shoes-vnsjwJ.png",
    sliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33daacb7-dea2-4ee7-8d8d-b8c5bfc9c190/jordan-stadium-90-shoes-vnsjwJ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a5478435-d609-4db6-af88-e82b4f28fee3/jordan-stadium-90-shoes-vnsjwJ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2d3e475e-4aaf-4ae4-956d-b85305297c1b/jordan-stadium-90-shoes-vnsjwJ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba562cb2-8874-4ecf-a02b-aa16a8088ff4/jordan-stadium-90-shoes-vnsjwJ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/80ee2701-2b8e-484b-bd41-a38a06e9896c/jordan-stadium-90-shoes-vnsjwJ.png",
    ],
  },
  {
    id: 4,
    title: "Nike Air Dunk Low Jumbo",
    price: 11495,
    desc: "The '80s icon returns with a nature-inspired aesthetic. This Dunk features a full-length Nike Air unit for even more cushioning, wherever your day takes you. A jumbo Swoosh logo takes centre stage, while the updated tongue sports a large pull tab and exposed foam for a DIY look.",
    imgMain:
      "https://www.nike.com/in/t/air-dunk-low-jumbo-shoes-NfdN23/FJ4192-001",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/be9c4570-bc4c-49a4-a350-7c6e8fdc7909/air-dunk-low-jumbo-shoes-NfdN23.png",
    sliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d39b8cb3-df87-41a5-885f-949c951c2c55/air-dunk-low-jumbo-shoes-NfdN23.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/863b9c60-1063-4968-b350-17649edf9bbb/air-dunk-low-jumbo-shoes-NfdN23.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a50cc4f9-a87d-411f-acb6-97a46ffca415/air-dunk-low-jumbo-shoes-NfdN23.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ac346dd0-b65d-4c2a-ba75-0bc3fc347cff/air-dunk-low-jumbo-shoes-NfdN23.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10923e97-7dae-4d92-bba4-eded206141fc/air-dunk-low-jumbo-shoes-NfdN23.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25cbc3a6-c6cd-47cd-a04b-3166f83bdbb9/air-dunk-low-jumbo-shoes-NfdN23.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90498375-dd01-43ee-958d-1219fd867231/air-dunk-low-jumbo-shoes-NfdN23.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aee78e13-686e-411f-95f1-b71530f4d252/air-dunk-low-jumbo-shoes-NfdN23.png",
    ],
  },
  {
    id: 5,
    title: "Nike Air Max 1 SE",
    price: 13995,
    desc: "The Air Max 1 SE goes back to basics with a simple black and white design. It retains the same revolutionary cushioning that made it famous while adding a pop of colour to the tongue.",
    imgMain: "https://www.nike.com/in/t/air-max-1-se-shoe-nPq9vX/FZ5160-121",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/521c3c5b-97ee-4ed3-9705-658f5a4ee779/air-max-1-se-shoe-nPq9vX.png",
    sliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d8cf9c34-aa97-4f59-83ae-e3518070080c/air-max-1-se-shoe-nPq9vX.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c78c6718-d118-4db8-829f-66350107e6c9/air-max-1-se-shoe-nPq9vX.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3bbb9e03-d94a-450a-9bbe-bcb3ad26e4ba/air-max-1-se-shoe-nPq9vX.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b27f822-77a9-4da9-975c-55f77e3780fd/air-max-1-se-shoe-nPq9vX.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fe97d638-4e57-4773-904b-efafee207305/air-max-1-se-shoe-nPq9vX.png",
    ],
  },
  {
    id: 6,
    title: "Nike SB Vertebrae",
    price: 7495,
    desc: "The Vertebrae breaks in fast and breaks down slow, creating a consistent fit straight out of the box. Colour-blocking in a Nike heritage palette gives this modern shoe the perfect touch of retro.",
    imgMain: "https://www.nike.com/in/t/sb-vertebrae-shoes-Zlnwhs/FD4691-100",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70341d64-cc85-4e9c-913a-2a9c59e0d3e1/sb-vertebrae-shoes-Zlnwhs.png",
    sliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e36e85af-def0-472a-a87c-e4b01ef28cdf/sb-vertebrae-shoes-Zlnwhs.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/020abb1a-23f6-44fb-9ec9-358e5a811444/sb-vertebrae-shoes-Zlnwhs.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/503e2c77-74e9-48df-a93e-4ebda0bbc76d/sb-vertebrae-shoes-Zlnwhs.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b379ea4-b56a-4016-b09c-749071857e16/sb-vertebrae-shoes-Zlnwhs.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e9ce8c87-f3e1-42da-9140-11cc0b47e94d/sb-vertebrae-shoes-Zlnwhs.png",
    ],
  },
  {
    id: 7,
    title: "Air Jordan XXXVIII Low PF",
    price: 17295,
    desc: "Get grounded, stay grounded. The AJ XXXVIII is all about groundwork—we're talking about your running, your cutting, your turn-around jumpers—with low-to-the-court cushioning and a secure upper that helps support every move. It's also designed with sustainability in mind, with at least 20% recycled content by weight. So you can hit 'em with that windscreen-wiper fake and feel good about more than just sinking a bucket for your team.",
    imgMain:
      "https://www.nike.com/in/t/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn/FD2325-004",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce032076-a7ad-4257-af2a-1f8952c7ce8f/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png",
    sliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aeb0e25f-a6c0-4d9c-b1bf-409ef9586e1a/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/499d53d1-5269-440a-aed1-9e09d0777e52/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3262613d-6feb-4eea-90aa-4f1950e3b1f6/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7d88af34-66b8-46e2-9911-932bd722cccc/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7377d71f-949e-4525-b038-cccb6949fead/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png",
    ],
  },
  {
    id: 8,
    title: "Nike Juniper Trail 2",
    price: 7095,
    desc: "Break away from the norm and dash up that tempting trail in the Nike Juniper Trail 2. Durable material on the top and tough traction on the bottom give you a consistent, confident ride for those off-road runs calling your name. It's built for earthy terrain and unbeaten paths, with reliable traction that'll help keep you on course.",
    imgMain:
      "https://www.nike.com/in/t/juniper-trail-2-trail-running-shoes-PT4wqk/DM0822-102",
    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7eb28cca-54f6-4021-8ab8-42182f02e816/juniper-trail-2-trail-running-shoes-PT4wqk.png",
    sliderImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10410532-d233-4ddc-b39d-d376b4329566/juniper-trail-2-trail-running-shoes-PT4wqk.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/66ae5669-60b3-42d2-99a9-191a85843732/juniper-trail-2-trail-running-shoes-PT4wqk.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f72cd7d2-bb7d-4ebe-a5b3-22ae5adba95b/juniper-trail-2-trail-running-shoes-PT4wqk.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c4fb4024-606f-4ffd-97d9-f11b97f6aa3c/juniper-trail-2-trail-running-shoes-PT4wqk.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ddb0d933-d3de-424f-97d3-8441fdb60150/juniper-trail-2-trail-running-shoes-PT4wqk.png",
    ],
  },
];

const FeaturedItem = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 px-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center pb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Our featured items
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>

    <div>

    
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          pagination={false}
          breakpoints={{
            // When window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1024px
            1220: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {FeaturedProd.map((product) => {
            return (
              <>
                <SwiperSlide>
                  <div className="relative group" key={product.id}>
                    <div className="overflow-hidden aspect-w-1 aspect-h-1">
                      <img
                        className="object-cover w-full h-72 transition-all duration-300 group-hover:scale-105"
                        src={product.imgUrl}
                        alt=""
                      />
                    </div>
                    <div className="absolute left-3 top-3">
                      <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                        Sale
                      </p>
                    </div>
                    <div className="flex items-start justify-between mt-4 space-x-4">
                      <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                          <p href="#" title="">
                            {product.title}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            ></span>
                          </p>
                        </h3>
                        <div className="flex items-center mt-2.5 space-x-px">
                          <Star className="text-yellow-500 text-xs" />
                          <Star className="text-yellow-500 text-xs" />
                          <Star className="text-yellow-500 text-xs" />
                          <Star className="text-yellow-500 text-xs" />
                          <Star className="text-yellow-500 text-xs" />
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                          ₹{product.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center relative">
                      <button className="font-bold w-full bg-black h-[40px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                        Add to Cart
                        <ShoppingCart className="mx-2" />
                      </button>

                      <button className="font-bold w-full  bg-zinc-300 h-[40px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-black hover:text-zinc-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
                        Buy Now
                        <ShoppingCartCheckout className="mx-2" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        </div>
      </div>
    </section>
  );
};
export default FeaturedItem;
