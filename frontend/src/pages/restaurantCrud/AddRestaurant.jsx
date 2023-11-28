import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import MapManager from "../../components/Maps/mapManager.jsx";
import { useCreateRestaurantMutation } from "../../redux/service/restaurant/restaurantApi.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddRestaurant = () => {
  const mapState = useSelector((state) => state.map);
  console.log();

  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "",
    tags: [],
    brands: [],
    categories: [],
  });

  const [createRestaurant, { isLoading, isError, isSuccess }] =
    useCreateRestaurantMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the createRestaurant mutation with the form data
      formData.Localisation = mapState.location;
      const response = await createRestaurant({ formData });
      console.log("Restaurant created successfully:", response);
    } catch (error) {
      console.error("Error creating restaurant:", error);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="flex justify-center items-center mt-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl"
        >
          <p className="text-blue-800 font-bold flex items-center justify-center">
            Add New Restaurant
          </p>
          <div className="mt-3">
            <div className="pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Restaurant Name
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                name="name"
                id="name"
                placeholder="Restaurant Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-3">
            <div className="pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Description
              </label>
              <input
                name="description"
                id="description"
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex mt-3">
            <div className="pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Tag
              </label>
              <input
                name="tags"
                id="tags"
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Tag"
                value={formData.tags}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-3">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Brand
            </label>
            <input
              name="brands"
              id="brands"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="Text"
              placeholder="Brand"
              value={formData.brands}
              onChange={handleInputChange}
            />
          </div>

          <div className="pr-2 mt-3">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Categorie
            </label>
            <input
              name="categories"
              id="categories"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="Categorie"
              value={formData.categories}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2 text-white font-semibold tracking-wider bg-gray-900 rounded mt-5"
          >
            Add Restaurant
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center mb-5">
        <MapManager />
      </div>
    </React.Fragment>
  );
};
export default AddRestaurant;
