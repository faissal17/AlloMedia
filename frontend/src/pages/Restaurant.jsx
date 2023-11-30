import React, { useState, useEffect } from "react";
import { RiDeleteBinLine, RiMapPin2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  useGetAllRestaurantsQuery,
  useDeleteRestaurantMutation,
} from "../redux/service/restaurant/restaurantApi";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Restaurant = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState([0, 0]);
  const {
    data: restaurants,
    error: errorRestaurants,
    isLoading: loadingRestaurants,
    refetch,
  } = useGetAllRestaurantsQuery();

  const [deleteRestaurant] = useDeleteRestaurantMutation();

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.target.id;
    await deleteRestaurant(id);
    refetch();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMap = async (e) => {
    setOpen(true);
    const lat = e.target.id.split(" ")[0];
    const lng = e.target.id.split(" ")[1];
    await setPosition([lat, lng]);
  };

  console.log(restaurants);

  return (
    <React.Fragment>
      <Link to="/dashboard/addRestaurant">
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
                    {restaurant.description.length > 50
                      ? restaurant.description.substring(0, 30) + "..."
                      : restaurant.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {restaurant.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {restaurant.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {tag.name}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {restaurant.brands.map((brand) => (
                    <span
                      key={brand.id}
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {brand.name}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {restaurant.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {category.name}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    <AiOutlineEdit className="inline-block text-xl" />
                  </a>
                  <button
                    onClick={handleDelete}
                    className="ml-2 text-red-600 hover:text-red-900"
                  >
                    <RiDeleteBinLine
                      id={restaurant._id}
                      className="inline-block text-xl"
                    />
                  </button>
                  <button className="ml-2 text-green-600 hover:text-green-900">
                    <RiMapPin2Line
                      onClick={handleMap}
                      id={restaurant.localisation.lat
                        .toString()
                        .concat(" ", restaurant.localisation.lng.toString())}
                      className="inline-block text-xl"
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle>{"Map Restaurant"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className=" w-full"
          >
            <div className="pt-8">
              <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={true}
                style={{ height: "50vh", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default Restaurant;
