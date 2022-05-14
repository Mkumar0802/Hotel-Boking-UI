import React from 'react';

import Home from './Components/Home';
import {  Route, Routes } from "react-router-dom";
import './index.css' // tailwind
import Hotel from './Components/Hotel';
import Resort from './Components/Resort';
import Villas from './Components/Villas';
import Payment from './Components/Payment';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';



function App() {

  return (

    <div className='bg-blue-100   min-h-screen'>
 
       <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={< Login/>} />
          <Route path="home" element={<Home />} />
          <Route path="hotel" element={<Hotel/>} />
          <Route path="resort" element={<Resort />} />
          <Route path="villas" element={<Villas/>} />
          <Route path="payment" element={<Payment/>} />
          <Route path="register" element={<Register />} />
         
          {/* <Route path="cart" element={<Cart />} />
        
          <Route path="paymentconfirmation" element={<Payment />} />
          */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className="text-white text-2xl">Page under Construction!</p>
              </main>
            }
          />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
