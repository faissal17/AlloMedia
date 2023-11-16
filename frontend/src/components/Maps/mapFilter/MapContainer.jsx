import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "./leafletForm";
// import LeafletRoutingMachine from "./leafletRoutingMachine";

const Container = () => {
  const position = [31.7917, -7.0926];
  const [directions, setDirections] = useState([]);
  const restaurants = [
    {
      name: "Restaurant 1",
      location: [34.0209, -6.8416], // Casablanca
    },
    {
      name: "Restaurant 2",
      location: [30.4336, -9.5981], // Agadir
    },
    {
      name: "Restaurant 3",
      location: [35.7694, -5.8399], // Tangier
    },
    {
      name: "rachid daoudi",
      location: [32.2995, -9.2372], // Marrakech
    },
    {
      name: "Restaurant 5",
      location: [34.0339, -6.8361], // Rabat
    },
    {
      name: "Restaurant 6",
      location: [34.685, -1.9086], // Fes
    },
    {
      name: "Restaurant 7",
      location: [29.6911, -9.7331], // Essaouira
    },
    {
      name: "Restaurant 8",
      location: [34.0372, -5.0028], // Meknes
    },
    {
      name: "Restaurant 9",
      location: [32.3754, -6.36], // Ouarzazate
    },
    {
      name: "Restaurant 10",
      location: [34.26, -6.5783], // Casablanca
    },
    {
      name: "Restaurant 11",
      location: [31.9546, -7.6053], // Beni Mellal
    },
    {
      name: "Restaurant 12",
      location: [30.4341, -9.1393], // Taroudant
    },
    {
      name: "Restaurant 13",
      location: [33.5951, -7.6188], // Settat
    },
    {
      name: "Restaurant 14",
      location: [30.1798, -9.2423], // Inezgane
    },
  ];

  return (
    <div style={{ position: "relative", width: "70%" }}>
      <h1>Map</h1>
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "50vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {restaurants.map((restaurant, index) => (
          <Marker key={index} position={restaurant.location}>
            <Popup>{restaurant.name}</Popup>
          </Marker>
        ))}

        <Leaflet />

        {/* <LeafletRoutingMachine /> */}
      </MapContainer>
    </div>
  );
};

export default Container;
