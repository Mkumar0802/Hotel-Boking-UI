import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

import { URLDevelopment } from "../Helper/Url";



const  Resort = () => {
    const [resort, setResort] = useState([]);
    // const dispatch =useDispatch();
    console.log(resort);

    const getData = async () => {
        try {
            let { data: response } = await axios.get(
                ` ${URLDevelopment}resort/getresort`
            );
            setResort(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const setData = (id, name, photo, price, details) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('photo', photo)
        localStorage.setItem('price', price)
        localStorage.setItem('details', details)

    }
    return (

        <div className="bg-blue- 100">
            <div className="flex justify-center ">
                <h2 className=" animate-flipInX
                  text-xl   md:text-5xl font-bold   ">Resort details </h2>
            </div>

            <div className="     ">
                {resort.map((val) => {
                    return (
                        <div key={val.index}>
                            <div className="px-24 py-10" >
                                <div >
                                    <div className="grid grid-row-2 ">
                                        <div className="flex justify-center  md:w-3/6   ">
                                            <img
                                                className=" object-full rounded-xl md:w-3/5  md:h-4/6  h-5/6 w-full"
                                                alt="Hotel"
                                                src={val.photo}
                                            />
                                            <div className="px-5   ">
                                                <p className=" text-base md:text-4xl font-radio  ">{val.name}</p>
                                                <p className=" font-radio">
                                                    {val.address}
                                                </p>
                                                <p className="text-base md:text-lg  font-radio  ">₹ {val.price}</p>
                                                <div className="flex justify-center   gap-3 "><Link to="/payment">
                                                    <button onClick={() => setData(val.id, val.name, val.photo, val.price, val.details)} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" >
                                                       Book

                                                    </button></Link>


                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    );
                })}
            </div>

        </div>


    );
};

export default Resort ;