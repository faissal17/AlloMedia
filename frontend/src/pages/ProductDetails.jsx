import React from "react";
import pizza from "../assets/pizza.jpg";
import cafe from "../assets/cafe.jpg";
import hero from "../assets/hero.png";

const ProductDetails = () => {
  const tags = ["pizza", "italy", "napoli", "mozarella"];

  return (
    <React.Fragment>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-xl mx-auto p-5 sm:p-10 md:p-16 flex justify-center items-center">
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <div className="h-72 overflow-hidden">
                <img src={pizza} className="w-full h-full object-cover" />
              </div>
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Photos
              </div>
            </div>
            <div className="flex justify-around mt-4">
              <div className="w-16 h-16 border border-gray-300 rounded-full overflow-hidden mt-2">
                <img
                  src={cafe}
                  className="w-full h-full object-cover"
                  alt="Cafe"
                />
              </div>
              <div className="w-16 h-16 border border-gray-300 rounded-full overflow-hidden mt-2">
                <img
                  src={pizza}
                  className="w-full h-full object-cover"
                  alt="Pizza"
                />
              </div>
              <div className="w-16 h-16 border border-gray-300 rounded-full overflow-hidden mt-2">
                <img
                  src={hero}
                  className="w-full h-full object-cover"
                  alt="Hero"
                />
              </div>
            </div>
            <div className="px-6 py-4">
              <p className="font-bold text-2xl text-black inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                Pizza Napolitaine
              </p>
              <p className="text-gray-500 text-sm">
                a basic dough, raw tomatoes, fresh mozzarella cheese, fresh
                basil, and olive oil
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex justify-between">
                <h3 className="mt-2 text-lg font-semibold">22DH</h3>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
