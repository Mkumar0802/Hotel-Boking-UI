import React from 'react'
import banner from '../Assets/banner.webp'
import hotel from '../Assets/hotel.webp'
import resort from '../Assets/resorts.jpg'
import vills from '../Assets/villas.jpg'

import { Link } from "react-router-dom";

function Main() {
    return (
        <div className=''>
            <img
                className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full animate-zoomInDown  "
                alt="meals"
                src={banner}
            ></img>
            <div className='flex justify-center  '>
                <h1 className='font-radio text-xl  md:text-2xl font-semibold py-8 pt-8  '>
                    Browse  by Property
                </h1>
            </div>
            <div>

            </div>
            <div className="sm:p-10   md:pl-14 justify-center  animate-slideInLeft">

                <div className="  grid grid-col-3 gap-5  md:grid-cols-5 pl-5">
                    <div className="p-1  bg-blue-800  rounded-lg  max-w-sm  sm:rounded-lg  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full    "
                            alt="Movies"
                            src={hotel}
                        ></img>
                        <div className="rounded-xl md:w-auto  md:h-4/6  h-5/6 w-full justify-center  ">
                            <div className="rounded-lg px-1 py-1   hover:bg-indigo-500 flex text-justify justify-center  ">
                                <button className="text-white md:text-xl underline underline-offset-1 ">
                                    <Link to="/hotel">Hotel </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-1  bg-blue-800  rounded-lg  max-w-sm  sm:rounded-lg  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full    "
                            alt="Movies"
                            src={vills}
                        ></img>
                        <div className="rounded-xl md:w-auto  md:h-4/6  h-5/6 w-full justify-center  ">
                            <div className="rounded-lg px-1 py-1   hover:bg-indigo-500 flex text-justify justify-center  ">
                                <button className="text-white md:text-xl underline underline-offset-1 ">
                                    <Link to="/villas">villas </Link>
                                </button>
                            </div>
                        </div>
                    </div>
               
                    <div className="p-1  bg-blue-800  rounded-lg  max-w-sm  sm:rounded-lg  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
                        <img
                            className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full    "
                            alt="Movies"
                            src={resort}
                        ></img>
                        <div className="rounded-xl md:w-auto  md:h-4/6  h-5/6 w-full justify-center  ">
                            <div className="rounded-lg px-1 py-1  hover:bg-indigo-500 flex text-justify justify-center  ">
                                <button className="text-white md:text-xl underline underline-offset-1 ">
                                    <Link to="/Resort">Resort </Link>
                                </button>
                            </div>
                        </div>
                    </div>







            </div>
        </div>

        </div >
    )
}

export default Main