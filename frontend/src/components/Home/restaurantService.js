import { useEffect, useState } from "react";
import { useSearchRestaurantMutation } from "../../redux/service/restaurant/restaurantApi";

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
  ] = useSearchRestaurantMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const getRestaurant = async (restaurant) => {
    try {
      await sendrestaurant(restaurant);
    } catch (error) {
      console.error("Error sending restaurant:", error);
    }
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
