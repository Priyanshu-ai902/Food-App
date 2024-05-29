import React from 'react'

function Service() {
    return (
        <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
            <div className="container mx-auto py-[2vh]">
                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0nygh1drSs_S891q8MmtZYEiagRDs5qPyw&s" alt="" className='h-[32rem] mx-auto justify-end' />
                    <div className="text-2xl md:text-3xl font-bold text-blue-900 lg:text-4xl">
                        We are <span className='text-orange-600'>more</span> than <span className='text-yellow-500'>multiple </span>
                        service
                        <div />
                        <div className="lg:text-lg text-blue-950 md:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum ex sapiente? Eaque esse laudantium, delectus quia ex ipsum nostrum!</div>
                        <div className="flex gap-8 items-center">
                            <button className='bg-orange-600 active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>
                                About Us
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Service
