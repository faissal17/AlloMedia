const userControllers = require("./users");
const productControllers = require("./products");
const cuisineControllers = require("./cuisines");
const restaurantController = require("./restaurant");
const categoryController = require("./categories");
const orderController=require('./orders')
const brandController=require('./brands')
const tagController=require('./tags')

module.exports = {
  userControllers,
  productControllers,
  cuisineControllers,
  restaurantController,
  categoryController,
  orderController,
  brandController,
  tagController
};
