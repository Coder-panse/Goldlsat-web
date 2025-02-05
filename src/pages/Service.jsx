
import React from "react";
import Cards from "../component/Cards";

const Service = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[540px] mt-4">
        <img
          src="/serviceimg.png"
          alt="Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:left-[35rem] lg:w-[55vw]">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl leading-snug">
            Explore Our <br />
            Various <span className="text-[#5628FF] oregano text-[50px]">Services</span>
          </h1>
          <p className="text-white mt-4 text-sm sm:text-base">
            Unlock your potential with personalized, one-on-one tutoring designed
            to transform your learning experience. Secure your appointment now
            and take the next bold step towards Golden LSAT excellence.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-200 px-6 sm:px-12 pt-16 sm:pt-28 pb-20 w-full">
        <h1 className="text-[#5628FF] text-center text-[60px] max-sm:text-4xl font-semibold oregano">
          Exclusive Services
        </h1>
        <div className="mt-10">
          <Cards />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-[90vw] sm:w-[80vw] md:w-[70vw] h-auto md:h-[380px] relative rounded-[40px] overflow-hidden my-16 md:my-32 mx-auto">
        <img
          src="/aboutimg.jpeg"
          alt="About"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 text-white text-center px-6 sm:px-16 flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Claim Your Free Consultation
          </h1>
          <p className="my-5 text-sm sm:text-base">
            I promise you the LSAT is Simple, Easy, and Fun! Let me show you the
            brighter, Golden version of the LSAT. Become the Boss of the Test.
          </p>
          <button className="bg-[#5628FF] px-5 py-2 w-[250px] sm:w-[330px] rounded-sm text-white font-medium hover:cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Service;
