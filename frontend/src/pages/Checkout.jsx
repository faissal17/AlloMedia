import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useAddOrderMutation } from "../redux/service/orders/orderApi";

const Checkout = () => {
  const shoppingcart = useSelector((state) => state.shoppingcart);
  const [addOrder, { data: deliveryData, error, isLoading: isAddLoading }] =
  useAddOrderMutation();
  const [order,setOrder]=useState({
    firstName:'' ,
    lastName: '',
    email: '',
    phone:'',
    lineOne:'',
    lineTwo:'',
    zipCode:'',
    orderDetails: shoppingcart.shoppingCart,
  })
  const handleChange= (e)=>{
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
    console.log('fucking order')
    
  }
  const handleSubmit= async (e)=>{
    e.preventDefault()
    console.log(order)
    await addOrder(order)
  }
  
  

  return (
    <React.Fragment>
      <Navbar />
      <div className="flex justify-center items-center mt-2">
        <form
          className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl"
          
        >
          <p className="text-gray-800 font-medium">Customer Information</p>
          <div className="mt-2 flex">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                First Name
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                name='firstName'
                id='firstName'
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Last Name
              </label>
              <input
               name='lastName'
               id='lastName'
               onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className=" flex mt-2">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Email
              </label>
              <input
               name='email'
               id='email'
               onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Your Email" 
              />
            </div>
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Phone Number
              </label>
              <input
               name='phone'
               id='phone'
               onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="+212.000.000"
              />
            </div>
          </div>
          <div className=" flex mt-2">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Line 1
              </label>
              <input
               name='lineOne'
               id='lineOne'
               onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Address 1"
              />
            </div>
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Line 2
              </label>
              <input
               name='lineTwo'
               id='lineTwo'
               onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Address 2"
              />
            </div>
          </div>

          <div className="mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Payment Information
            </label>
            <input
             name='cardNumber'
             id='cardNumber'
             onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="number"
              placeholder="Card Number"
            />
          </div>

          <div className="flex mt-2">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Expire Date
              </label>
              <input
              name='ExDate'
              id='ExDate'
              onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="MM/YYYY"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                CCV
              </label>
              <input
              name='ccv'
              id='ccv'
              onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="password"
                placeholder="CCV"
              />
            </div>
          </div>

            <div className=" mt-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Zip Code
              </label>
              <input
              name='zipCode'
              id='zipCode'
              onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="zip code"
              />
            </div>
          <div className="mt-6">
            
          </div>
          <button
              onClick={handleSubmit}
              className="w-full px-6 py-2 text-white font-semibold tracking-wider bg-gray-900 rounded"
            >
              Checkout
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
