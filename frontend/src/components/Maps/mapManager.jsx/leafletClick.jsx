import { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { setMap } from "../../../redux/features/map/mapSlice";
import { useDispatch, useSelector } from "react-redux";

const LeafletClick = () => {
  const map = useMap();
  const dispatch = useDispatch();
  const mapState = useSelector((state) => state.map);
  console.log(mapState);

  useEffect(() => {
    let marker;
    map.on("click", async function (e) {
      if (marker) {
        map.removeLayer(marker);
      }
      const latLngObject = { lat: e.latlng.lat, lng: e.latlng.lng };
      dispatch(setMap(latLngObject));

      marker = L.marker(e.latlng)
        .addTo(map)
        .bindPopup(e.latlng.toString())
        .openPopup();
    });
  }, [map]);
  return null;
};

export default LeafletClick;
