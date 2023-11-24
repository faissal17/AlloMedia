import { useEffect, useState } from "react";
import { useGetOneRestaurantMutation } from "../../redux/service/restaurant/restaurantApi";

export const RestaurantService = () => {
  const [data, setData] = useState({});
  const [
    sendrestaurant,
    {
      data: restaurantData,
      isSuccess: isrestaurantSuccess,
      isError: isrestaurantError,
      error: restaurantError,
    },
  ] = useGetOneRestaurantMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const getRestaurant = async (restaurant) => {
    await sendrestaurant(restaurant);
  };

  useEffect(() => {
    if (isrestaurantSuccess) {
      setData(restaurantData.content);
    }
  }, [isrestaurantSuccess]);

  return {
    handleSubmit,
    getRestaurant,
    dataRestaurant: data,
  };
};
