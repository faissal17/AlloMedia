import React from "react";
import Navbar from "../components/common/Navbar";

const Checkout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex justify-center items-center mt-2">
        <form className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl">
          <p className="text-gray-800 font-medium">Customer Information</p>
          <div className="mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Name
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              required
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div className="mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Email
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              required
              placeholder="Your Email"
              name="Email"
            />
          </div>

          <div className="mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Payment Information
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="number"
              required
              placeholder="Card Number"
              name="card-number"
            />
          </div>

          <div className="flex mt-2">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Expire Date
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                required
                placeholder="MM/YYYY"
                name="Expire-Date"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                CCV
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="password"
                required
                placeholder="CCV"
                name="ccv"
              />
            </div>
          </div>

          <div className="flex mt-2">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Country
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                required
                placeholder="City"
                name="city"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Adress
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                required
                placeholder="adress"
                name="address"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              className="w-full px-6 py-2 text-white font-semibold tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              Place order
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
