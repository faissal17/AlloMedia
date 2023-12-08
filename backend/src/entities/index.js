const { User, userConstants } = require("./User");
const { Product } = require("./Product");
const { Order } = require("./Order");
const { Cuisine } = require("./Cuisine");
const { Category } = require("./Category");
const { Restaurant } = require("./restaurant");
const { Menu } = require("./Menu");
const { OrderDetails } = require("./OrderDetails");
const { Role } = require("./role");

module.exports = {
  User,
  constants: {
    userConstants,
  },
  Product,
  Order,
  Cuisine,
  Category,
  Restaurant,
  Menu,
  OrderDetails,
  Role,
};
