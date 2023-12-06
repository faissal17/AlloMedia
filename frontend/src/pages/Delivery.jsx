import Navbar from "../components/common/Navbar";
import Footer from "./Footer";
import backgroundDel from "../assets/deliveryBackground.jpeg";
import CustomInput from "../components/common/Input";
import { IoIosSearch } from "react-icons/io";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useGetCityQuery } from "../redux/service/cities/cityApi";
import trans1 from "../assets/motor-removebg-preview.png";
import trans2 from "../assets/bicycle-removebg-preview.png";
import { ButtonDefault } from "../components/common/Buttons";
import { useEffect, useState } from "react";
import { useAddDeliveryMutation } from "../redux/service/delivery/delivery";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");


const Delivery = () => {
  useEffect(() => {}, []);

  const { data, isLoading } = useGetCityQuery();

  const [addDelivery, { data: deliveryData, error, isLoading: isAddLoading }] =
    useAddDeliveryMutation();
  const [delivery, setDelivery] = useState({
    user: "656b0d810b3b574acbfc740f",
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    vycle: "",
  });
  function handleClick(type) {
    setDelivery({ ...delivery, vycle: type });
    console.log(delivery);
  }
  const handleSubmit = async () => {
    const currentDate = new Date();

    // You can format the date as needed, for example: YYYY-MM-DD HH:mm:ss
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")} ${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    socket.emit("sendNotificationJob", {
      data: {
        name: delivery.fullName,
        for: "Job",
        date: formattedDate,
      },
    });
    console.log('here')
    console.log(delivery)
    await addDelivery(delivery);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city") {
      // If the changed input is the city, update the delivery state
      setDelivery({ ...delivery, city: value });
    } else {
      // For other inputs (like text input), update the delivery state as usual
      setDelivery({ ...delivery, [name]: value });
    }
    console.log(delivery);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <div className=" h-[92vh] mt-2 relative flex justify-center">
          <h3 className=" absolute z-40 top-5 text-5xl text-center  md:text-5xl  xl:text-6xl w-[95%]  md:w-[50%]  xl:w-[28%] font-bold text-white left-[0%]  md:left-[22%]">
            You decide to return to your home
          </h3>
          <img
            className=" absolute w-[100%]  md:w-[80%]  xl:w-[60%]  h-full top-0 opacity-90"
            src={backgroundDel}
            alt=""
          />
          <div className=" absolute left-[10%] md:left-[25%]  xl:left-[22%] bottom-9 py-5 min-h-[560px] bg-white w-[80%] md:w-[50%]  xl:w-[22%] rounded-md">
            <div className=" relative p-4">
              <h3 className=" text-xl text-gray-600 font-semibold">
                Sign up to get started in less than 24 hours
              </h3>
              <div className=" flex mt-4 flex-col gap-4">
                <CustomInput
                  icon={<IoIosSearch className=" w-6" />}
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="
                                        rounded-md
                                    w-[350px] py-[14px]  border border-gray-300 
                                    focus:border-primary focus:border-[1.5px] text-gray-600"
                  submit={false}
                />
                <CustomInput
                  icon={<IoIosSearch className=" w-6" />}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="
                                        rounded-md
                                    w-[350px] py-[14px]  border border-gray-300 
                                    focus:border-primary focus:border-[1.5px] text-gray-600"
                  submit={false}
                />
                <FormControl fullWidth>
                  <InputLabel id="">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="city"
                    name="city"
                    value={delivery.city}
                    label="Age"
                    onChange={handleChange}
                  >
                    {isLoading && (
                      <div className="w-10 h-10 border-4 border-red-500 rounded-full animate-spin"></div>
                    )}
                    {data &&
                      data.content.map((item, index) => (
                        <MenuItem key={index} value={item.slug}>
                          {item.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <CustomInput
                  icon={<IoIosSearch className=" w-6" />}
                  type="text"
                  onChange={handleChange}
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+212.000.000"
                  className="
                                        rounded-md
                                    w-[350px] py-[14px]  border border-gray-300 
                                    focus:border-primary focus:border-[1.5px] text-gray-600"
                  submit={false}
                />
                <div className=" flex gap-2">
                  <span
                    data-type="MOTOR"
                    onClick={() => handleClick("MOTOR")}
                    className=" cursor-pointer  w-20 h-20 lg:w-16 lg:h-16 border rounded-lg border-primary p-1"
                  >
                    <img
                      data-type="MOTOR"
                      className=" w-full h-full"
                      src={trans1}
                      alt=""
                    />
                  </span>
                  <span
                    data-type="bCYcle"
                    onClick={() => handleClick("bCYcle")}
                    className=" cursor-pointer w-20 h-20 lg:w-16 lg:h-16 border rounded-lg border-primary p-1"
                  >
                    <img
                      data-type="bCYcle"
                      className=" w-full h-full"
                      src={trans2}
                      alt=""
                    />
                  </span>
                </div>
                <ButtonDefault onClick={handleSubmit} className="  w-full ">
                  Confirme
                </ButtonDefault>
                <Link className=" text-sm underline text-center text-blue-500">
                  General Conditions of UsePrivacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Delivery;
