import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LeafletClick from "./leafletClick";

const Container = () => {
  const position = [31.7917, -7.0926];

  return (
    <div style={{ position: "relative", width: "90%" }} className="pt-4">
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "80vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LeafletClick />
      </MapContainer>
    </div>
  );
};

export default Container;
