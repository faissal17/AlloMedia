import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { AiOutlineEnvironment, AiOutlineCoffee } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import data from "../Form/data.json";

import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
const PageRes = () => {
  const [position, setPosition_] = useState([31.7917, -7.0926]);
  const [_position, setPosition] = useState(null);
  const [restaurant, setRestaurant] = useState({});
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const name = query.get("name");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (geoLocation) => {
        const { latitude, longitude } = geoLocation.coords;
        setPosition([latitude, longitude]);
      },
      (error) => {
        console.error(error.message);
      }
    );
  }, []);

  useEffect(() => {
    const matchingRestaurant = data.find((restaurant) => {
      const lowerCaseQuery = name.toLowerCase();
      return (
        restaurant.name.toLowerCase().includes(lowerCaseQuery) ||
        restaurant.cuisine.toLowerCase().includes(lowerCaseQuery)
      );
    });

    if (matchingRestaurant) {
      setRestaurant(matchingRestaurant);
      setPosition_([matchingRestaurant.latitude, matchingRestaurant.longitude]);
    }
  }, []);

  return (
    <section className="lg:py-10 py-6">
      <div className=" px-16 _container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1">
            <div className="swiper cart-swiper-pagination justify-center swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs">
              <div className="swiper-wrapper justify-center gap-2 w-full transition-duration-0 transform translate3d(0px, 0px, 0px)">
                <div
                  className="swiper-slide cursor-pointer swiper-slide-visible w-full"
                  style={{ width: "100%" }}
                >
                  <img
                    src="https://img.freepik.com/photos-gratuite/burger-explosif-legumes-fromage-fondu-fond-noir-generative-ai_157027-1734.jpg?w=1060&t=st=1700214760~exp=1700215360~hmac=e1c21b20dd0b948b2333165e04741f00b9a897c355556e22902270f4b0ad81bd"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-medium text-default-800 mb-1">
              {restaurant && restaurant.name}
            </h3>
            <h5 className="text-lg font-medium text-default-600 mb-2">
              <span className="text-base font-normal text-default-500">by</span>{" "}
              Blaze Pizza
            </h5>

            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-1.5">
                <span>
                  <i className="fa-solid fa-star text-base text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-base text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-base text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-base text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star-half-stroke text-base text-yellow-400"></i>
                </span>
              </div>
              <div className="h-4 w-px bg-default-400"></div>
              <h5 className="text-sm text-default-500">3 Reviews</h5>
            </div>

            <p className="text-sm text-default-500 mb-4">
              {restaurant && restaurant.description}
            </p>

            <div className="flex gap-2 mb-5">
              <div className="border border-default-200 rounded-full px-3 py-1.5 flex items-center gap-2.5">
                <span className="text-xs">Adress :</span>
                <span className="text-xs text-default-500">
                  {restaurant && restaurant.address}
                </span>
              </div>

              <div className="border border-default-200 rounded-full px-3 py-1.5 flex items-center gap-2.5">
                <span className="text-xs">Cuisine :</span>
                <span className="text-xs text-default-500">
                  {restaurant && restaurant.cuisine}
                </span>
              </div>

              <div className="border border-default-200 rounded-full px-3 py-1.5 flex items-center gap-2.5">
                <span className="text-xs">city :</span>
                <span className="text-xs text-default-500">
                  {restaurant && restaurant.city}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <button
                className="w-8 py-3 bg-primary rounded text-white text-sm"
                onClick={handleOpen}
              >
                <span className="flex items-center justify-center gap-1">
                  <AiOutlineEnvironment />
                </span>
              </button>

              <button className="w-8 py-3 bg-primary rounded text-white text-sm">
                <span className="flex items-center justify-center gap-1">
                  <AiOutlineCoffee />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen} className="w-2/4">
        <DialogHeader>
          <h5 className="text-2xl font-medium text-default-800 flex items-center gap-2.5">
            <span className="text-base font-normal text-default-500 ">
              <AiOutlineEnvironment />
            </span>{" "}
            Map
          </h5>
        </DialogHeader>
        <DialogBody>
          {restaurant && restaurant.latitude && restaurant.longitude && (
            <MapContainer
              center={[restaurant.latitude, restaurant.longitude]}
              zoom={15}
              scrollWheelZoom={true}
              style={{ height: "50vh" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker position={[restaurant.latitude, restaurant.longitude]}>
                <Popup>
                  <b>{restaurant.name}</b>
                  <br />
                  address: {restaurant.address}
                  <br />
                  cuisine: {restaurant.cuisine}
                </Popup>
              </Marker>

              {_position && (
                <Marker
                  position={_position}
                  icon={L.icon({
                    iconUrl: "../../src/assets/logoLocalisation.png",
                    iconSize: [35, 41],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                  })}
                >
                  <Popup>Tu es ici !</Popup>
                </Marker>
              )}
            </MapContainer>
          )}
        </DialogBody>
      </Dialog>
      <div className="pt-10 px-16">
        <div className="grid lg:grid-cols-4 items-center gap-5 w-full">
          <div className="bg-primary/10 py-8 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-6xl font-semibold text-default-800 mb-4">
              4.7
            </h1>

            <div className="flex gap-1.5 mb-2">
              <span>
                <i className="fa-solid fa-star text-lg text-yellow-400"></i>
              </span>
              <span>
                <i className="fa-solid fa-star text-lg text-yellow-400"></i>
              </span>
              <span>
                <i className="fa-solid fa-star text-lg text-yellow-400"></i>
              </span>
              <span>
                <i className="fa-solid fa-star text-lg text-yellow-400"></i>
              </span>
              <span>
                <i className="fa-solid fa-star text-lg text-default-200"></i>
              </span>
            </div>

            <h4 className="text-base font-medium text-default-700">
              Customer Rating{" "}
              <span className="font-normal text-default-500">(23,476)</span>
            </h4>
          </div>

          <div className="xl:col-span-2 md:col-span-3">
            <div className="grid md:grid-cols-12 items-center gap-2 mb-3">
              <div className="md:col-span-3 flex gap-1.5 lg:justify-center">
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
              </div>
              <div className="md:col-span-7">
                <div className="flex w-full h-1 bg-default-200 rounded-full overflow-hidden">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-primary w-4/6 rounded"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="inline-block text-sm font-medium text-default-700">
                  66%
                </h4>
                <span className="font-normal text-default-500">(94,532)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-12 items-center gap-2 mb-3">
              <div className="md:col-span-3 flex gap-1.5 lg:justify-center">
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
              </div>
              <div className="md:col-span-7">
                <div className="flex w-full h-1 bg-default-200 rounded-full overflow-hidden">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-primary w-1/4 rounded"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="inline-block text-sm font-medium text-default-700">
                  25%
                </h4>
                <span className="font-normal text-default-500">(6,717)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-12 items-center gap-2 mb-3">
              <div className="md:col-span-3 flex gap-1.5 lg:justify-center">
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
              </div>
              <div className="md:col-span-7">
                <div className="flex w-full h-1 bg-default-200 rounded-full overflow-hidden">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-primary w-2/12 rounded"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="inline-block text-sm font-medium text-default-700">
                  16%
                </h4>
                <span className="font-normal text-default-500">(714)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-12 items-center gap-2 mb-3">
              <div className="md:col-span-3 flex gap-1.5 lg:justify-center">
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
              </div>
              <div className="md:col-span-7">
                <div className="flex w-full h-1 bg-default-200 rounded-full overflow-hidden">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-primary w-1/12 rounded"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="inline-block text-sm font-medium text-default-700">
                  8%
                </h4>
                <span className="font-normal text-default-500">(643)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-12 items-center gap-2">
              <div className="md:col-span-3 flex gap-1.5 lg:justify-center">
                <span>
                  <i className="fa-solid fa-star text-lg text-yellow-400"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star text-lg text-default-200"></i>
                </span>
              </div>
              <div className="md:col-span-7">
                <div className="flex w-full h-1 bg-default-200 rounded-full overflow-hidden">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-primary w-[4%] rounded"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="inline-block text-sm font-medium text-default-700">
                  4%
                </h4>
                <span className="font-normal text-default-500">(152)</span>
              </div>
            </div>
          </div>
        </div>
        <h4 className="text-base font-medium text-default-800 pt-4">
          Customer Review
        </h4>
        {restaurant &&
          restaurant.reviews &&
          restaurant.reviews.map((review) => (
            <div class="border-b border-default-200 py-5">
              <div class="flex items-center mb-3">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  class="h-12 w-12 rounded-full me-4"
                />
                <div class="">
                  <div class="flex items-center gap-2 mb-2">
                    <h4 class="text-sm font-medium text-default-800">
                      {review.reviewer}
                    </h4>
                    <i class="fa-solid fa-circle text-[5px] text-default-400"></i>
                    <h4 class="text-sm font-medium text-default-400">
                      Just now
                    </h4>
                  </div>
                  <div class="flex gap-1.5">
                    <span>
                      <i class="fa-solid fa-star text-base text-yellow-400"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star text-base text-yellow-400"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star text-base text-yellow-400"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star text-base text-default-200"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star text-base text-default-200"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p class="text-default-600 text-slate-600 ">{review.comments}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default PageRes;
