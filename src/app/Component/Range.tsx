import Image from 'next/image';
import React from 'react';

const Cont = () => {
  return (
    <main className="w-[80%] mx-auto  bg-white p-5 px-7">
      <div className="text-center mt-5">
        <h1 className="text-[32px] font-bold">Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 gap-[20px]">
        
        <div className="flex flex-col items-center">
          <Image src="/images/Mask Group.png" alt="Image" width={381} height={480} />
          <h1 className="mt-4 font-semibold text-[24px]">Dining</h1>
        </div>

        
        <div className="flex flex-col items-center">
          <Image src="/images/Image-living room.png" alt="Image" width={381} height={480} />
          <h1 className=" mt-4 font-semibold text-[24px]">Living</h1>
        </div>

        
        <div className="flex flex-col items-center">
          <Image src="/images/Mask Group (1).png" alt="Image" width={381} height={480} />
          <h1 className=" mt-4 font-semibold text-[24px]">Bedroom</h1>
        </div>
      </div>
    </main>
  );
};

export default Cont;