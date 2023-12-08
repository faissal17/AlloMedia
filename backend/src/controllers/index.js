const userControllers = require("./users");
const productControllers = require("./products");
const cuisineControllers = require("./cuisines");
const restaurantController = require("./restaurant");
const categoryController = require("./categories");
const orderController = require("./orders");
const brandController = require("./brands");
const tagController = require("./tags");
const cityController = require("./cities");
const menuController = require("./menu");
const itemController = require("./items");
const imageController = require("./images");
const deliveryPersonController = require("./deliverypersone");
const orderDetailsController = require("./orderDetails");
const roleController = require("./roles");
const contactController = require("./contact");

module.exports = {
  userControllers,
  productControllers,
  cuisineControllers,
  restaurantController,
  categoryController,
  orderController,
  brandController,
  tagController,
  cityController,
  itemController,

  deliveryPersonController,
  menuController,
  imageController,
  orderDetailsController,
  roleController,
  contactController,
};
