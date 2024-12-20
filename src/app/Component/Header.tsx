import React from 'react'

const Header = () => {  
  return (
    <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-20 md:gap-[20px] justify-center border-t-4 border-gray-200">
            <div>
                <h2 className='font-bold text-[24px] flex justify-center cursor-pointer mt-10'>Funiro.</h2>
                <p className='text-[16px] mt-12 ml-36 text-gray-400'>404 University Drive Suite 200 Coral Gables,</p>
                <h2 className='text-[16px] ml-36 text-gray-400'>Fl 33134 USA</h2>
            </div>

            <div className='mt-10'>
                <h2 className='ml-24 text-gray-400 font-medium text-[16px] mt-1 cursor-pointer '>Links</h2>
                <h2 className='ml-24 mt-14 cursor-pointer font-medium text-[16px]'>Home</h2>
                <h2 className='ml-24 mt-14 cursor-pointer font-medium text-[16px]'>Shop</h2>
                <h2 className='ml-24 mt-14 cursor-pointer font-medium text-[16px]'>About</h2>
                <h2 className='ml-24 mt-14 cursor-pointer font-medium text-[16px]'>Contact</h2>
            </div>

            <div className='mt-10'>
            <h2 className='ml-24 text-gray-400 font-medium text-[16px] mt-1 cursor-pointer'>Help</h2>
                <h2 className='ml-24 mt-14 cursor-pointer font-medium text-[16px]'>Payment Options</h2>
                <h2 className='ml-24 mt-14 cursor-pointer font-medium text-[16px]'>Returns</h2>
                <h2 className='ml-24 mt-14 cursor-pointer font-medium text-[16px]'>Privacy Policies</h2>
            </div>

            <div className='mt-10'>

            <h2 className='ml-24 text-gray-400 font-medium text-[16px] mt-1 cursor-pointer'>Newsletter</h2>
            <div className='flex space-x-3 items-center ml-8'>
                <input type="email" placeholder='Enter Your Emmail Address' className='outline-none border-b-2 p-3 text-[14px] border-gray-300 w-[200px] mt-8'/>
            <h2 className='mt-10 cursor-pointer font-medium text-[16px]  underline'>SUBSCRIBE</h2>
            </div>
            </div>

           
        </div>

        <div className='border-t-2 border-gray-300 w-[80%] mx-auto mt-8 '>
                <h2 className='text-[16px] mt-8 mb-8'>2024 Furino.All right reverved</h2>
            </div>
    </main>
  )
}

export default Header;