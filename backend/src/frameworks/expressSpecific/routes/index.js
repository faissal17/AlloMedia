const express = require("express");
const usersRouter = require("./users");
const productsRouter = require("./products");
const cuisineRouter = require("./cuisine");
const restaurantRoute = require("./restaurent")
const categoryRouter=require('./category')
const orderRouter=require('./orders')
const brandRouter=require('./brands')
const tagRouter=require('./tags')
const cityRouter=require('./cities')
const itemRouter=require('./items')
const imgRouter=require('./testImg')

module.exports = (dependencies) => {
  const routes = express.Router();
  const users = usersRouter(dependencies);
  const products = productsRouter(dependencies);
  const cuisine = cuisineRouter(dependencies);
  const category = categoryRouter(dependencies);
  const restaurant = restaurantRoute(dependencies);
  const item=itemRouter(dependencies)
  const img=imgRouter(dependencies)
  const order=orderRouter(dependencies)
  const brand=brandRouter(dependencies)
  const tag=tagRouter(dependencies)
  const city=cityRouter(dependencies)
  
  
  
  routes.use("/restaurant", restaurant);
  routes.use("/users", users);
  routes.use("/products", products);
  routes.use("/cuisines", cuisine);
  routes.use("/category", category);
  routes.use('/order',order)
  routes.use('/brands',brand)
  routes.use('/tags',tag)
  routes.use('/cities',city)
  routes.use('/items',item)
  routes.use('/testimg',img)
  return routes;
};
