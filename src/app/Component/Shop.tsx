import Image from 'next/image'
import React from 'react'

const Shop = () => {
  return (
    <main className='bg-gray-100 mx-auto p-7 mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-8 md:gap-x-10'>
            <div className='mt-36 items-center'>
                <h1 className='font-bold text-center text-[40px]'>50+ Beautiful rooms inspiration</h1>
                <p className='ml-9 mt-5'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>

                <button className="px-[50px] md:px-[70px] py-3 border-2 bg-[#B88E2F] hover:bg-opacity-90 text-white transition duration-300 font-bold ml-9 mt-5">
                 Explore More
                </button>
            </div>

            <div>
                <Image src="/images/Image.png" alt="image" width={404} height={582}/>
            </div>

            <div>
                <Image src="/images/Rectangle 25.png" alt="image" width={404} height={582}/>
            </div>
        </div>
    </main>
  )
}

export default Shop