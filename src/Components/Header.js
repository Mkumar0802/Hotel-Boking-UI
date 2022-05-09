import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";


const Header = () => {

    let [open, setOpen] = useState(false);
    return (
        <div className=' shadow-md w-full top-0 left-0 '>
            <div className='md:flex items-center justify-between bg-blue-800  p-10   md:px-10 px-7 '>
                <div className='font-bold text-2xl cursor-pointer    items-center font-[Poppins] '>
                    <div className='flex flex-row space-x-10 text-white'>
                        <h1 className='font-radio md:text-3xl animate-flip '>Hotel Booking</h1>
                        <div>
                        <h1 className=' md:text-xl border-2 p-1  rounded-md hover:bg-blue-700 hidden md:block'>Contant</h1>
                    </div>
                    <div>
                        <h1 className=' md:text-xl border-2 p-1  rounded-md  hover:bg-blue-700 hidden md:block'>List your Property</h1>
                    </div>
                    <div>
                        <h1 className=' md:text-xl border-2 p-1  rounded-md bg-white text-blue-700 hover:bg-blue-200 hidden md:block'>Login</h1>
                    </div>

                    </div>


                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={` text-white md:flex gap-3 md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-3/4 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? '  top-20 ' : 'top-[-490px]  '}`}>

                    <li className="  rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100">  <Link to="/stays">Stays</Link></li>
                    <li className=" rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700    flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100"> <Link to="/fight"> Fight </Link></li>
                    <li className=" rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700    flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100"><Link to="/"> Fight + Hotel</Link>  </li>
                    <li className=" rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700    flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100"><Link to="/"> Car rentals</Link>  </li>
                    <li className=" rounded-full px-4 py-2  bg-blue-700  hover:bg-blue-700    flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100"><Link to="/"> Airport taxis</Link>  </li>
                </ul>
                <Outlet />
                
            </div>
            <div class="flex justify-center py-5 ">

                    <div class="flex items-center justify-center  ">
                        <div class="datepicker relative form-floating mb-3 xl:w-96 ">
                            <input type="date"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="start date" />

                        </div>
                        <div class=" xl:w-96">
                            <div class="input-group relative flex  items-stretch w-full mb-3 py-1.5">
                                <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Where are you going?" aria-label="Search" aria-describedby="button-addon3" />
                                <button class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                            </div>

                        </div>
                    </div>

                </div>
              
        </div>
        
    )
}

export default Header;