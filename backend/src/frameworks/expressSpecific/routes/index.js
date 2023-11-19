const express = require("express");
const usersRouter = require("./users");
const productsRouter = require("./products");
const cuisineRouter = require("./cuisine");
const restaurantRoute = require("./restaurent")
const categoryRouter=require('./category')
const orderRouter=require('./orders')
const brandRouter=require('./brands')

module.exports = (dependencies) => {
  const routes = express.Router();
  const users = usersRouter(dependencies);
  const products = productsRouter(dependencies);
  const cuisine = cuisineRouter(dependencies);
  const category = categoryRouter(dependencies);
  const order=orderRouter(dependencies)
  const brand=brandRouter(dependencies)
  
  
  
  
  const restaurant = restaurantRoute(dependencies);
  routes.use("/restaurant", restaurant);
  routes.use("/users", users);
  routes.use("/products", products); 
  routes.use("/cuisines", cuisine);
  routes.use("/category", category);
  routes.use('/order',order)
  routes.use('/brands',brand)
  return routes;
};
