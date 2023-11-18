import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SearchForm from "../Form";
import data from "../Form/data.json";

const Container = () => {
  const position = [31.7917, -7.0926];
  const [_position, setPosition] = useState(null);
  const [restaurant, setRestaurant] = useState({});

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

  const handleSearch = (query) => {
    const matchingRestaurant = data.find((restaurant) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        restaurant.name.toLowerCase().includes(lowerCaseQuery) ||
        restaurant.cuisine.toLowerCase().includes(lowerCaseQuery)
      );
    });

    if (matchingRestaurant) {
      setRestaurant(matchingRestaurant);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <SearchForm onSearch={handleSearch} />
      {/* <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "45vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {restaurant && restaurant.latitude && restaurant.longitude && (
          <Marker position={[restaurant.latitude, restaurant.longitude]}>
            <Popup>
              <b>{restaurant.name}</b>
              <br />
              address: {restaurant.address}
              <br />
              cuisine: {restaurant.cuisine}
            </Popup>
          </Marker>
        )}

        {_position && (
          <Marker
            position={_position}
            icon={L.icon({
              iconUrl: "src/assets/logoLocalisation.png",
              iconSize: [35, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
            })}
          >
            <Popup>Tu es ici !</Popup>
          </Marker>
        )}
      </MapContainer> */}
    </div>
  );
};

export default Container;
