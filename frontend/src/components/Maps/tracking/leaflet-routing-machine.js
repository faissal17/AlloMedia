import { useEffect, useState } from "react";
import L, { marker } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
let routingControl, ourMarker;

const LeafletRoutingMachine = () => {
  const map = useMap();
  const [p, setp] = useState([32.244162, -8.531602]);

  const userCoordinates = [32.247, -8.523];

  useEffect(() => {
    if (routingControl) map.removeControl(routingControl);
    if (map) {
      routingControl = L.Routing.control({
        waypoints: [p, userCoordinates],
        lineOptions: {
          styles: [{ color: "#242424", opacity: 1, weight: 5 }],
        },
        draggableWaypoints: false,
      })
        .on("routeselected", (e) => {
          setTimeout(() => {
            setp(e.route.coordinates[1]);
          }, 500);
        })
        .addTo(map);
    }
  }, [p]);
  useEffect(() => {
    if (ourMarker) {
      ourMarker.remove();
    }
    ourMarker = marker(p).addTo(map);
  }, [p]);
  return null;
};

export default LeafletRoutingMachine;
