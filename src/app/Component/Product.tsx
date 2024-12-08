import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (
    <main className="w-full max-w-[80%] mx-auto bg-white p-5 px-4 md:px-7">
      <div className="text-center mt-5">
        <h2 className="text-[28px] md:text-[40px] font-bold">Our Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-[16px] md:gap-[20px] mb-7">
        <div className="flex flex-col bg-gray-200 p-4 rounded-lg">
          <Image src="/images/Images.png" alt="Image" width={285} height={301} className="rounded-md" />
          <div>
            <h2 className="mt-4 font-semibold text-[20px] md:text-[24px] ml-2">Syltherine</h2>
            <h2 className="pt-2 text-[14px] md:text-[16px] ml-2 text-gray-500">Stylish cafe chair</h2>
            <div className="flex items-center">
              <h2 className="pt-2 font-semibold text-[18px] md:text-[20px] ml-2">Rp 2.500.000</h2>
              <p className="pt-2 text-gray-500 text-[14px] md:text-[16px] ml-2"><s>Rp 3.500.000</s></p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-gray-200 p-4 rounded-lg">
          <Image src="/images/Featured Products.png" alt="Image" width={285} height={301} className="rounded-md" />
        </div>

        <div className="flex flex-col bg-gray-200 p-4 rounded-lg">
          <Image src="/images/image 3.png" alt="Image" width={285} height={301} className="rounded-md" />
          <div>
            <h2 className="mt-4 font-semibold text-[20px] md:text-[24px] ml-2">Lolito</h2>
            <h2 className="pt-2 text-[14px] md:text-[16px] ml-2 text-gray-500">Luxury big sofa</h2>
            <div className="flex items-center">
              <h2 className="pt-2 font-semibold text-[18px] md:text-[20px] ml-2">Rp 7.000.000</h2>
              <p className="pt-2 text-gray-500 text-[14px] md:text-[16px] ml-2"><s>Rp 14.000.000</s></p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-gray-200 p-4 rounded-lg">
          <Image src="/images/image 4.png" alt="Image" width={285} height={301} className="rounded-md" />
          <div>
            <h2 className="mt-4 font-semibold text-[20px] md:text-[24px] ml-2">Respira</h2>
            <h2 className="pt-2 text-[14px] md:text-[16px] ml-2 text-gray-500">Outdoor bar table and stool</h2>
            <div className="flex items-center">
              <h2 className="pt-2 font-semibold text-[18px] md:text-[20px] ml-2">Rp 500.000</h2>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other product cards */}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-10 gap-[20px] ">
        
        <div className="flex flex-col  bg-gray-200">
            <Image src="/images/Images (1).png" alt="Image" width={285} height={301} />
            <div>
            <h2 className="mt-4 font-semibold text-[24px] ml-2">Grifo</h2>
            <h2 className='pt-2 gap-1 text-[16px] ml-2 text-gray-500 '>Night lapm</h2>
            <div className='flex '>
            <h2 className='pt-2 font-semibold text-[20px] ml-2 mb-7'>Rp 1.500.000</h2>
            </div>
            </div>
          </div>
  
          
          <div className="flex flex-col  bg-gray-200">
            <Image src="/images/Images (2).png" alt="Image" width={285} height={301} />
            <div>
            <h2 className="mt-4 font-semibold text-[24px] ml-2">Muggo</h2>
            <h2 className='pt-2 gap-1 text-[16px] ml-2 text-gray-500 '>Small mug</h2>
            <div className='flex '>
            <h2 className='pt-2 font-semibold text-[20px] ml-2 mb-7'>Rp 150.000</h2>
            </div>
            </div>
          </div>
  
          
          <div className="flex flex-col  bg-gray-200">
            <Image src="/images/Images (3).png"alt="Image" width={285} height={301} />
            <div>
            <h2 className="mt-4 font-semibold text-[24px] ml-2">Pingky</h2>
            <h2 className='pt-2 gap-1 text-[16px] ml-2 text-gray-500 '>Cute bed set</h2>
            <div className='flex '>
            <h2 className='pt-2 font-semibold text-[20px] ml-2'>Rp 7.000.000</h2>
            <p className='pt-3 text-gray-500 text-[16px] ml-2 mb-7'><s><s>Rp 14.000.000</s></s></p>
            </div>
            </div>
          </div>
  
          <div className="flex flex-col  bg-gray-200 ">
            <Image src="/images/Images (4).png" alt="Image" width={285} height={301} />
            <div>
            <h2 className="mt-4 font-semibold text-[24px] ml-2">Potty</h2>
            <h2 className='pt-2 gap-1 text-[16px] ml-2 text-gray-500 '>Minimalist flower pot</h2>
            <div className='flex '>
            <h2 className='pt-2 font-semibold text-[20px] ml-2 mb-7'>Rp 500.000</h2>
            </div>
            </div>
          </div>
        </div>


      <div className="flex justify-center my-7">
        <button className="px-[50px] md:px-[70px] py-3 border-2 border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white transition duration-300 font-bold">
          Show More
        </button>
      </div>
    </main>
  );
};

export default Product;
