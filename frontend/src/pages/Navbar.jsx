import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx"; 
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-orange-300 shadow-md fixed top-0 left-0 w-full z-40 h-25 ease-in duration-300 backdrop-blur-md">
      <div className='py-2 px-10 sm:px-4 md:px-6 lg:px-6 container mx-auto'>
        <div className="flex  items-center justify-between">
          <img
            src="https://th.bing.com/th/id/OIP.s3x79zW0bKRaTfItjRj9KgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            className='h-20 w-20 cursor-pointer rounded-[20px]'
            alt=""
          />

          <div className="lg:flex hidden gap-8 items-center">
            <a href="" className='text-black text-xl font-medium hover:text-blue-500'>Today Special</a>
            <a href="" className='text-black text-xl font-medium hover:text-blue-500'>Why foody</a>
            <a href="" className='text-black text-xl font-medium hover:text-blue-500'>Our Menu</a>
            <a href="" className='text-black text-xl font-medium hover:text-blue-500'>Add food</a>
            <a href="" className='text-black text-xl font-medium hover:text-blue-500'>Popular</a>
            <button className='bg-red-500 active:scale-90 transition duration-100 transform hover:shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>Login</button>
          </div>


          <div className='block lg:hidden' onClick={handleNav}>
            {nav ? (
              <RxCross2 size={25} className="text-white z-40" />
            ) : (
              <TiThMenu size={25} className='text-white cursor-pointer z-40' />
            )}
          </div>

        </div>

        <div className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop:blur-md  top-0 duration-500 ${nav ? "right-0" : "right-[-100%]"} pt-24`}>
          <div className="flex flex-col gap-8 items-center">
            <a href="" className='text-black text-base font-medium hover:text-blue-500'>Today Special</a>
            <a href="" className='text-black text-base font-medium hover:text-blue-500'>Why foody</a>
            <a href="" className='text-black text-base font-medium hover:text-blue-500'>Our Menu</a>
            <a href="" className='text-black text-base font-medium hover:text-blue-500'>Add food</a>
            <a href="" className='text-black text-base font-medium hover:text-blue-500'>Popular</a>
            <button className='bg-red-500 active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>Login</button>


          </div>
        </div>
      </div>

    </div>

  );
};

export default Navbar;
