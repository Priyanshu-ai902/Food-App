import React from 'react';
import { FaSearch, FaPlay } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
            <div className='container mx-auto py-[14vh]'>
                <div className='grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center'>
                    <div className="lg:w-[32rem] w-full flex flex-col space-y-6">
                        <div className="text-4xl md:text-5xl font-bold text-green lg:text-6xl">
                            We are <span className='text-orange-400'>
                                Serious
                            </span> For <span className='text-orange-400'> Food</span> & <span className='text-yellow-300'>Delivery</span>
                        </div>
                        <div className="lg:text-xl text-blue-950 md:text-lg text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias ducimus enim optio cum, voluptatibus suscipit laudantium corrupti commodi molestiae deleniti voluptate odit porro non blanditiis impedit explicabo ut quisquam, natus voluptates modi repellat necessitatibus perferendis. Veritatis, culpa nobis sit eligendi cupiditate ab! Debitis, est voluptate non quam modi beatae!
                        </div>
                        <div className="flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md">
                            <div className="flex items-center">
                                <FaSearch size={22} className='cursor-pointer' />
                                <input type="text" className='text-blue-950 w-full border-none outline-none py-2 px-4' />
                            </div>
                            <div className="h-10 w-10 relative bg-orange-300 rounded-full">
                                <FaSearch size={15} className='cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />

                            </div>
                        </div>

                        <div className=" flex gap-8 items-center">
                            <button className='bg-orange-500 active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>Explore now</button>

                            <div className="sm:flex hidden gap-4 items-center">
                                <div className="h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full">
                                    <FaPlay size={18} className='cursor-pointer text-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                </div>
                                <div className="lg:text-xl text-black md:text-lg text-base cursor-pointer">
                                    Watch Now
                                </div>
                            </div>
                        </div>




                    </div>
                    <img src="https://img.freepik.com/premium-photo/showcase-international-fast-food-dishes-each-one-unique-flavorful_124507-143881.jpg" className='h-[28rem] mx-auto justify-end' alt="" />


                </div>
            </div>

        </div>
    )
}

export default Header
