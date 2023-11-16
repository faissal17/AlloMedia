const express = require("express");
const usersRouter = require("./users");
const productsRouter = require("./products");
const cuisineRouter = require("./cuisine");

module.exports = (dependencies) => {
  const routes = express.Router();
  const users = usersRouter(dependencies);
  const products = productsRouter(dependencies);
  const cuisine = cuisineRouter(dependencies);
  routes.use("/users", users);
  routes.use("/products", products);
  routes.use("/cuisines", cuisine);
  return routes;
};