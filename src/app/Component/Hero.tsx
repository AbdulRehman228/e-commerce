import React from 'react';

const Hero = () => {
  return (
    <main>
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div
          className="bg-white w-[90%] max-w-[643px] h-auto p-6 md:p-10 mt-16 md:mt-[80px] mx-auto lg:ml-[739px] z-10 absolute top-[50%] transform -translate-y-1/2"
        >
          <p className="font-Popp text-[#333333] text-sm md:text-base">New Arrival</p>
          <h2 className="text-[32px] md:text-[52px] text-[#B88E2F] font-bold leading-tight">
            Discover Our New Collection
          </h2>
          <p className="text-[14px] md:text-[18px] text-[#333333] pb-6 md:pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="font-bold text-white py-3 px-6 md:py-[25px] md:px-[72px] bg-[#B88E2F] hover:bg-opacity-90 transition">
            BUY NOW
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
