import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LeafletRoutingMachine from "./leaflet-routing-machine";
const TrackingUser = () => {
  const livreurCoordinates = [57.74, 11.94];
  const userCoordinates = [57.6792, 11.949];
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center mt-4">Tracking </h1>
      </div>
      <div className="w-full flex justify-center mt-4 rounded-md">
        <div
          style={{ position: "relative", width: "80%" }}
          className="rounded-md shadow-lg"
        >
          <MapContainer
            center={[32.244162, -8.531602]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "70vh", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
         
            <LeafletRoutingMachine />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default TrackingUser;
