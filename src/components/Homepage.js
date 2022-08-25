import React from 'react'
import Image from 'next/image'

function Homepage() {
    return (
        <div>
            <div className='h-screen w-screen overflow-hidden overflow-y-auto'>
                <div className='place-content-center flex bg-cyan-800'>
                    {/* <img src="https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_960_720.jpg" className='z-0 h-full w-auto' alt="" /> */}
                    <Image
                        src={"/../public/temp.png"}
                        height="1080px"
                        width="1080px"
                    // layout={"fill"}

                    />
                    <svg />
                    <h1 className='text-white top-10 right-10 pt-20 text-8xl z-10'>Welcome to <br /> UserName</h1>
                </div>
                {/* // hahahahahahahah */}
                <div className="max-w-xs mx-auto py-10">
                    <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                            <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                                <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="/../public/image-01.jpg" width="320" height="180" alt="Course" />
                            </figure>
                        </a>
                        {/* <!-- Card Content --> */}
                        <div className="flex-grow flex flex-col p-5">
                            {/* <!-- Card body --> */}
                            <div className="flex-grow">
                                {/* <!-- Header --> */}
                                <header className="mb-3">
                                    <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                                        <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">Fadu Event</h3>
                                    </a>
                                </header>
                                {/* <!-- Content --> */}
                                <div className="mb-8 text-black">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quaerat?</p>
                                </div>
                            </div>
                            {/* <!-- Card footer --> */}
                            <div className="flex justify-end space-x-2">
                                {/* <a className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" href="#0">Cancel</a> */}
                                <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">More Info</a>
                                <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage



