import React from "react";
import pizza from "../assets/pizza.jpg";
import cafe from "../assets/cafe.jpg";

const ProductDetails = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm bg-gray-100 border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center">
            <div className="p-5 w-full h-48">
              <img
                className="w-full h-full object-cover max-h-full rounded-2xl"
                src={cafe}
              />
            </div>
          </div>
          <div className="px-5 pb-5">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pizza Napolitaine
              </h2>
            </div>
            <div className="mt-3">
              <h5 className="text-md font-semibold tracking-tight text-gray-500 dark:text-white">
                A basic dough, raw tomatoes, fresh mozzarella cheese, fresh
                basil, and olive oil
              </h5>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-3xl font-semibold text-gray-900 dark:text-white">
                $599
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
