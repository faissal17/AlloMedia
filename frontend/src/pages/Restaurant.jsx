import React, { useState, useEffect } from "react";
import { RiDeleteBinLine, RiMapPin2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { useGetAllRestaurantsQuery } from "../redux/service/restaurant/restaurantApi";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const {
    data: restaurants,
    error: errorRestaurants,
    isLoading: loadingRestaurants,
  } = useGetAllRestaurantsQuery();
  
  console.log(restaurants);

  return (
    <React.Fragment>
      <Link to="/addRestaurant">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-5">
          Add Restaurant
        </button>
      </Link>
      <table className="divide-gray-200 w-full mt-5">
        <thead className="bg-gray-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tag
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Brand
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Categorie
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 divide-y divide-gray-200">
          {restaurants &&
            restaurants.content.map((restaurant, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={restaurant.picture}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {restaurant.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {restaurant.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {restaurant.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {restaurant.tag}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {restaurant.brand}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {restaurant.categories}
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    <AiOutlineEdit className="inline-block text-xl" />
                  </a>
                  <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                    <RiDeleteBinLine className="inline-block text-xl" />
                  </a>
                  <a
                    href="#"
                    className="ml-2 text-green-600 hover:text-green-900"
                  >
                    <RiMapPin2Line className="inline-block text-xl" />
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default Restaurant;
