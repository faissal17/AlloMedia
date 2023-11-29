import { useEffect, useState } from "react";
import { useGetAllRestaurantsQuery } from "../../../redux/service/restaurant/restaurantApi";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { Link } from "react-router-dom";
import Navbar from "../../common/Navbar";
import Footer from "../../../pages/Footer";

export default function Restaurantposition() {
  const yourRadiusInMeters = 1000;
  const [position, setPosition] = useState([32.249181, -8.520407]);
  const [restaurants, setRestaurants] = useState([]);
  const { data, error, isLoading } = useGetAllRestaurantsQuery();

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  // Filter restaurants within the circle
  const restaurantsInCircle = restaurants.filter((restaurant) => {
    const distance = calculateDistance(
      position[0],
      position[1],
      restaurant.localisation.lat,
      restaurant.localisation.lng
    );
    return distance <= yourRadiusInMeters / 1000;
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (geoLocation) => {
        const { latitude, longitude } = await geoLocation.coords;
        if (longitude && latitude) {
          await setPosition([latitude, longitude]);
        }
      },
      (error) => {
        console.error(error.message);
      }
    );
  }, []);

  useEffect(() => {
    if (data) {
      setRestaurants(data.content);
    }
  }, [data]);

  return (
    <>
      <Navbar/>
      <section className=" h-[85vh]">
        {isLoading && position && (
          <div className="w-10 h-10 border-4 border-red-500 rounded-full animate-spin"></div>
        )}

        <div className="flex justify-center h-full mt-4 rounded-md">
          <div
            style={{ position: "relative"}}
            className="rounded-md shadow-lg h-full w-[96%] md:w-[90%]  lg:w-[80%] "
          >
            <MapContainer
              center={position}
              zoom={15}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%", borderRadius:"20px" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {restaurants.map((restaurant, index) => (
                <Marker
                  key={index}
                  position={[
                    restaurant.localisation.lat,
                    restaurant.localisation.lng,
                  ]}
                >
                  <Popup>{restaurant.name}</Popup>
                </Marker>
              ))}

              <Circle
                center={position}
                radius={yourRadiusInMeters}
                fillColor="blue"
                fillOpacity={0.1}
                color="blue"
              />

              {position && (
                <Marker
                  position={position}
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
          </div>
        </div>
        <div className="mt-4 px-36">
          <h2
            className="text-center text-xl font-semibold text-gray-800 mb-2
          "
          >
            Restaurants within the Circle
          </h2>
          <ul className="flex flex-col gap-2">
            {restaurantsInCircle.map((restaurant, index) => (
              <li key={index} className="border-b border-gray-300 py-2 px-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  <Link to={`/restaurant/?slug=${restaurant.slug}`}>
                    {restaurant.name}
                  </Link>
                </h3>
                <p>
                  Distance:{" "}
                  {calculateDistance(
                    position[0],
                    position[1],
                    restaurant.localisation.lat,
                    restaurant.localisation.lng
                  ).toFixed(2)}{" "}
                  km
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer/>
    </>
  );
}
