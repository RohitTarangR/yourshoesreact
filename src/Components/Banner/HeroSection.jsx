import hero from "../../Assests/img/hero-image.png"
import flipkart from "../../Assests/img/flipkart.png"
import amazon from "../../Assests/img/amazon.png"

const HeroSection = () => {
  return (
    <main className="grid grid-cols-2 justify-center items-center mx-auto h-[90svh]">
      <div className="p-10 space-y-10">
        <h1 className="text-8xl font-semibold">YOUR FEET DESERVE THE BEST</h1>
        <p className="text-xl lowercase">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="flex gap-5">
            <button className="w-40 h-10 bg-black text-white font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:border">Shop Now</button>
            <button className="w-40 h-10 bg-black text-white font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:border">Category</button>
        </div>

        <div className="">
          <p className="">Also Available On</p>

          <div className="flex gap-5 items-center my-5">
            <img src={amazon} alt="amazon" />
            <img src={flipkart} alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="">
        <img src={hero} alt="hero" width={"100%"} />
      </div>
    </main>
  );
};

export default HeroSection;
