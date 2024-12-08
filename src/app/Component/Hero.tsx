import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Hide on medium screens only */}
      <div className="relative w-full h-[70vh] md:hidden">
        <Image
          src="/images/Mask Group.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      {/* Show only on large screens */}
      <div className="hidden md:block lg:block relative w-full h-[80vh]">
        <Image
          src="/images/Mask Group.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
