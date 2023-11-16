const express = require("express");
const usersRouter = require("./users");
const productsRouter = require("./products");
const cuisineRouter = require("./cuisine");
const restaurantRoute = require("./restaurent")

module.exports = (dependencies) => {
  const routes = express.Router();
  const users = usersRouter(dependencies);
  const products = productsRouter(dependencies);
  const cuisine = cuisineRouter(dependencies);
  const category = categoryRouter(dependencies);
  routes.use("/users", users);
  routes.use("/products", products);
  routes.use("/cuisines", cuisine);
  routes.use("/category", category);
  const restaurant = restaurantRoute(dependencies);
  routes.use("/users", users);
  routes.use("/products", products);
  routes.use("/cuisines", cuisine);
  routes.use("/restaurant", restaurant);
  const category = categoryRouter(dependencies);
  routes.use("/users", users);
  routes.use("/products", products);
  routes.use("/cuisines", cuisine);
  routes.use("/category", category);
  return routes;
};
