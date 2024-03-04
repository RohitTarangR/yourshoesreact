// import hero from "../../Assests/img/hero-image.png"
import flipkart from "../../Assests/img/flipkart.png"
import amazon from "../../Assests/img/amazon.png"
import BannerSwiper from "./BannerSwiper";

const HeroSection = () => {
  return (
    <main className="grid grid-cols-2 justify-center items-center mx-auto h-[90svh] max-md:grid-cols-1 max-md:text-center">
      <div className="p-10 space-y-10">
        <h1 className="text-8xl font-semibold max-xl:text-6xl max-lg:text-5xl">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="text-xl lowercase max-xl:text-lg max-lg:text-base">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="flex gap-5 max-md:justify-center">
          <button className="w-40 h-10 bg-black text-white font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:border hover:border-black">
            Shop Now
          </button>
          <button className="w-40 h-10 bg-white text-black font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out border border-black">
            Category
          </button>
        </div>

        <div className="">
          <p className="">Also Available On</p>

          <div className="flex gap-5 items-center max-md:justify-center my-5">
            <img src={amazon} alt="amazon" />
            <img src={flipkart} alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="max-md:hidden">
        {/* <img src={hero} alt="hero" width={"100%"} /> */}
        <BannerSwiper />
      </div>
    </main>
  );
};

export default HeroSection;
