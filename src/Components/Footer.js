import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 




function Footer() {
    useEffect(() => {
     
        AOS.init({duration:2000});
     
    }, [])
    return (
        <div className=" bg-blue-800 text-white   text-xs md:text-sm py-10 p-5 ">
            <div  data-aos="fade-up"  className="flex grid-cols-6  space-x-10 md:space-x-36 justify-center md:text-xl text-sm   ">

                <div   className="">
                    <ul className="  ">
                        <h1 className="text-semibold">
                            Hotels near me
                        </h1>
                        <li className=" hover:text-slate-200">
                            <Link to="/">Hotels in Manali</Link>
                        </li>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">Hotels in Nainital</Link>
                        </li>

                        <li className="hover:text-slate-200    ">
                            <Link to="/">Hotels in Mount Abu</Link>
                        </li>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">Hotels in Agra</Link>
                        </li>
                        <li className=" hover:text-slate-200   ">
                            <Link to="/">Hotels in Haridwar</Link>
                        </li>
                        <li className="hover:text-slate-200  ">
                            <Link to="/">Hotels in Gurgaon</Link>
                        </li>
                        <li className="hover:text-slate-200  ">
                            <Link to="/">Hotels in Coimbatore</Link>

                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h1 className="hover:text-slate-200 ">Hotels in Mahabaleshwar

                        </h1>
                        <li className=" hover:text-slate-200  ">
                            <Link to="/">Hotels in Pondicherry</Link>
                        </li>
                        <li className=" hover:text-slate-200  ">
                            <Link to="/">Hotels in Bangalore</Link>
                        </li>

                        <li className=" hover:text-slate-200   ">
                            <Link to="/">
                                Hotels in Shillong</Link>
                        </li>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">Travel Guide</Link>
                        </li>

                        <li className="hover:text-slate-200  ">
                            <Link to="/">Get Help</Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <ul>
                        <h1 className="hover:text-slate-200 ">

                            Hotels in Jaipur
                        </h1>
                        <li className="   ">
                            <Link to="/"> Hotels in Delhi</Link>
                        </li>
                        <li className="   ">
                            <Link to="/">Hotels in Tirupathi </Link>
                        </li>

                        <li className="    ">
                            <Link to="/">Hotels in Mysore</Link>
                        </li>
                        <li className="   ">
                            <Link to="/">Hotels in Mangalore</Link>
                        </li>

                        <li className="  ">
                            <Link to="/">Hotel in Munnar</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h1 className="hover:text-slate-200 ">
                            LEGAL
                        </h1>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">Legal</Link>
                        </li>
                        <li className=" hover:text-slate-200  ">
                            <Link to="/">Term and Conditions</Link>
                        </li>

                        <li className=" hover:text-slate-200   ">
                            <Link to="/">Privacy policy</Link>
                        </li>
                        <li className="hover:text-slate-200   ">
                            <Link to="/">Disclaimer</Link>
                        </li>

                        <li className="hover:text-slate-200  ">
                            <Link to="/">Caution Notice</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="py-12 ">

            </div>
            <div className="relative ">

                <div className="w-auto  text-white      py-20 text-center ">
                    <h1 className="text-white text-xl font-radio " >

                        Hotel Booking
                    </h1>


                    <div className="my-5 md:text-xl ">
                        <p>
                            Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research. Fair use is a use permitted by copyright statute that might otherwise be infringing.
                        </p>
                        <p> Copyright @{(new Date().getFullYear())} </p>

                    </div>

                    <p>
                        Made by Muthukumar
                    </p>
                    <p>
                        Using React,Tailwind CSS
                    </p>

                </div>



            </div>

        </div>



    )
}


export default Footer;