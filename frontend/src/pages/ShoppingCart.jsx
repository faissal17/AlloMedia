import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  deleteOrderInCart,
  deleteAll,
} from "../redux/features/shopping/ShoppingCartSlice";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const shoppingcart = useSelector((state) => state.shoppingcart);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Taxes = 1.99;
  const Shipping = 0.0;
  const Subtotal = 19.99;

  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 16.99 },
    // ... other products
  ]);

  const incrementQuantity = (productId) => {
    // setQuantities({
    //   ...quantities,
    //   [productId]: (quantities[productId] || 1) + 1,
    // });
    dispatch(increment(productId));
  };

  const decrementQuantity = (productId) => {
    // if (quantities[productId] > 1) {
    //   setQuantities({
    //     ...quantities,
    //     [productId]: quantities[productId] - 1,
    //   });
    // }
    dispatch(decrement(productId));
  };

  const removeProduct = (productId) => {
    // setProducts(products.filter((product) => product.id !== productId));
    // setQuantities(
    //   Object.keys(quantities).reduce((newQuantities, id) => {
    //     if (id !== productId) {
    //       newQuantities[id] = quantities[id];
    //     }
    //     return newQuantities;
    //   }, {})
    // );

    dispatch(deleteOrderInCart(productId));
  };

  const clearCart = () => {
    // setProducts([]);
    // setQuantities({});
    dispatch(deleteAll());
  };

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white py-2 px-4 rounded-lg mb-4"
        >
          Clear Cart
        </button>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingcart.shoppingCart &&
                    shoppingcart.shoppingCart.map((product) => (
                      <tr key={product.id}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src="https://via.placeholder.com/150"
                              alt="Product image"
                            />
                            <span className="font-semibold">
                              {product.title}
                            </span>
                          </div>
                        </td>
                        <td className="py-4">${product.price.toFixed(2)}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => decrementQuantity(product.id)}
                              className="border rounded-md py-2 px-4 mr-2"
                            >
                              -
                            </button>
                            <span className="text-center w-8">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() => incrementQuantity(product.id)}
                              className="border rounded-md py-2 px-4 ml-2"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">
                          ${(product.price * product.quantity).toFixed(2)}
                        </td>
                        <td className="py-4">
                          <button
                            onClick={() => removeProduct(product.id)}
                            className="bg-red-500 text-white py-2 px-4 rounded-lg"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${Subtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>${Taxes}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${Shipping}</span>
              </div>
              <hr className="my-2"></hr>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  {shoppingcart.shoppingCart &&
                    shoppingcart.shoppingCart
                      .reduce((total, product) => {
                        return (
                          total +
                          product.price * product.quantity +
                          Subtotal +
                          Taxes +
                          Shipping
                        );
                      }, 0)
                      .toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
