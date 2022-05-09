import React from "react";
import { useEffect, useState } from 'react';
// import { Link, Outlet } from "react-router-dom";
// import { cart } from '../features/cart'
// import { useDispatch } from "react-redux";
// import {cart} from '../features/cart'
import axios from "axios";
import { URLDevelopment } from "../Helper/Url";

import useRazorpay from "react-razorpay";


function Payment() {
    // const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [child, setChild] = useState(0);
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [price, setPrice] = useState('');

    const [details, setDetails] = useState(null);



    useEffect(() => {
        // setID(localStorage.getItem('id'))
        setName(localStorage.getItem('name'));
        setPhoto(localStorage.getItem('photo'));
        setPrice(localStorage.getItem('price'));
        setDetails(localStorage.getItem('details'));


    }, [])


    const Razorpay = useRazorpay();

    const initPayment = (data) => {
        const options = {
            key: "rzp_test_coemrweGrm2ve0",
            amount: data.amount,
            currency: data.currency,
            name: name,
            description: "Test Transaction",
            image: photo,
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = ` ${URLDevelopment}/payment/verify`;
                    const { data } = await axios.post(verifyUrl, response);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#00008B",
            },
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {
        try {
            const orderUrl = `${URLDevelopment}payment/orders `;
            const { data } = await axios.post(orderUrl, {amount: price * count + price * child });
            console.log(data);
            initPayment(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // const setData = (id, price, photo, name) => {
    //     localStorage.setItem('id', id)
    // //     localStorage.setItem('name', name)
    // //     localStorage.setItem('photo', photo)
    // //     localStorage.setItem('price', price)
    //     // localStorage.setItem('total',total)
    //     // localStorage.setItem('details', details)

    // }

    return (
        <div>
            <div className="container mx-auto  py-20 ">
                <h1 className="sm:text-xl md:text-3xl animate-rubberBand">Booking details</h1>

                <div className="grid grid-cols-2 gap-5  md:grid-cols-3 p-2 ">
                    <img
                        className=" object-cover rounded-xl md:w-full  md:h-4/6  h-5/6 w-full   "
                        alt="details"
                        src={photo}
                    ></img>
                    <div class="mb-6 ">
                        <p className="text-base md:text-2xl font-radio   ">{name}</p>
                        <p className=" text-base md:text-xl  ">{details}</p>
                       
                    </div>




                    <div className="justify-center ml-6 ">
                        <h1 className="text-xl font-semibold  ">No of Adult</h1>
                        <div className=" flex  py-3 ">
                            <button onClick={() => setCount(count - 1)} className={`  ${count <= 0 ? 'bg-blue-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-blue-600 hover:bg-blue-700'} `}>-</button>
                            <button className="p-2"> {count} </button>
                            <button onClick={() => setCount(count + 1)} className={`  ${count >= 100 ? 'bg-blue-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-blue-600 hover:bg-blue-700'} `}>+</button>
                        </div>
                        <h1 className="text-xl font-semibold  ">No of Children</h1>
                        <div className=" flex  py-3 ">

                            <button onClick={() => setChild(child - 1)} className={`  ${child <= 0 ? 'bg-blue-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-blue-600 hover:bg-blue-700'} `}>-</button>
                            <button className="p-2"> {child} </button>
                            <button onClick={() => setChild(child + 1)} className={`  ${child >= 100 ? 'bg-blue-600 opacity-50 cursor-not-allowed px-4 py-1 rounded-md ' : 'rounded-md px-4 py-1 my  bg-blue-600 hover:bg-blue--700'} `}>+</button>
                        </div>
                        <div className="justify-center py-5   font-bold">
                            <button onClick={handlePayment} className={`  ${count + child === 0 ? '  bg-blue-600 opacity-50 cursor-not-allowed px-5   py-4 rounded-md text-white  ' : 'rounded-md px-10 py-4 my  bg-blue-600 hover:bg-blue-700 text-white'} `}>Pay Now {price * (count) + (price * child)} </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>




            </div>
        </div>

    )
}

export default Payment;