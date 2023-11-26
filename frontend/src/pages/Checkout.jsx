import React from "react";
import Navbar from "../components/common/Navbar";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useAddOrderMutation } from "../redux/service/orders/orderApi";

const Checkout = () => {
  const shoppingcart = useSelector((state) => state.shoppingcart);

  const [addOrder, { data, error, isLoading }] = useAddOrderMutation();
  // console.log(shoppingcart);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cardNumber: "",
      ExDate: "",
      ccv: "",
      city: "",
      address: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email form";
      } else if (!values.cardNumber) {
        errors.cardNumber = "card Number is required";
      } else if (!values.name) {
        errors.name = "name is required";
      } else if (!values.ExDate) {
        errors.ExDate = "Expire date is required";
      } else if (!values.ccv) {
        errors.ccv = "CCV is required";
      } else if (!values.city) {
        errors.city = "city is required";
      } else if (!values.address) {
        errors.address = "Adress is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      const order = {
        name: values.name,
        email: values.email,
        cardNumber: values.cardNumber,
        ExDate: values.ExDate,
        ccv: values.ccv,
        city: values.city,
        address: values.address,
        orderDetails: shoppingcart.shoppingCart,
      };
      console.log(order);
      await addOrder(order);
    },
  });

  return (
    <React.Fragment>
      <Navbar />
      <div className="flex justify-center items-center mt-2">
        <form
          className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl"
          onSubmit={formik.handleSubmit}
        >
          <p className="text-gray-800 font-medium">Customer Information</p>
          <div className="mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Name
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="Your Name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 mt-2 text-md font-semibold flex justify-center items-center">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
          <div className="mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Email
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="Your Email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 mt-2 text-md font-semibold flex justify-center items-center">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Payment Information
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="number"
              placeholder="Card Number"
              {...formik.getFieldProps("cardNumber")}
            />
            {formik.touched.cardNumber && formik.errors.cardNumber ? (
              <div className="text-red-500 mt-2 text-md font-semibold flex justify-center items-center">
                {formik.errors.cardNumber}
              </div>
            ) : null}
          </div>

          <div className="flex mt-2">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Expire Date
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="MM/YYYY"
                {...formik.getFieldProps("ExDate")}
              />
              {formik.touched.ExDate && formik.errors.ExDate ? (
                <div className="text-red-500 mt-2 text-md font-semibold flex justify-center items-center">
                  {formik.errors.ExDate}
                </div>
              ) : null}
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                CCV
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="password"
                placeholder="CCV"
                {...formik.getFieldProps("ccv")}
              />
              {formik.touched.ccv && formik.errors.ccv ? (
                <div className="text-red-500 mt-2 text-md font-semibold flex justify-center items-center">
                  {formik.errors.ccv}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex mt-2">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Country
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="City"
                {...formik.getFieldProps("city")}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-500 mt-2 text-md font-semibold flex justify-center items-center">
                  {formik.errors.city}
                </div>
              ) : null}
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Adress
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="adress"
                {...formik.getFieldProps("address")}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500 mt-2 text-md font-semibold flex justify-center items-center">
                  {formik.errors.address}
                </div>
              ) : null}
            </div>
          </div>
          <div className="mt-6">
            <button
              className="w-full px-6 py-2 text-white font-semibold tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              Checkout
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
