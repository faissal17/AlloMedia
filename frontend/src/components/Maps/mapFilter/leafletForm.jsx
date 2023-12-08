import { React, useEffect } from "react";

import L from "leaflet";

import { useMap } from "react-leaflet";

import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

const Leaflet = () => {
  const map = useMap();
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

  useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        const name = e.sourceTarget._lastGeocode;
        const matchingRestaurant = restaurants.find((restaurant) => {
          return restaurant.name.toLowerCase() === name.toLowerCase();
        });

        if (matchingRestaurant) {
          const marker = L.marker(matchingRestaurant.location).addTo(map);

          marker
            .bindPopup(
              `<b>${matchingRestaurant.name}</b><br>Location: ${matchingRestaurant.location}<br><a href="#">Afficher Menu</a>`
            )
            .openPopup();
          map.panTo(matchingRestaurant.location);
        } else {
          console.log("No matching restaurant found for name:", name);
        }
      })
      .addTo(map);
  }, [map]);
  return null;
};

export default Leaflet;
