import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const TrackingUser = () => {
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
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "70vh", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            <Marker position={[51.505, -0.09]}>
              <Popup>Command</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default TrackingUser;
