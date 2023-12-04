const user = require("./users.schema");
const order = require("./orders.schema");
const brand = require("./brands.schema");
const category = require("./categories.schema");
const cuisine = require("./cuisines.schema");

const item = require("./items.schema");
const tag = require("./tags.schema");
const city = require("./cities.schema");
const menu = require("./menu.shema");
const image = require("./images.schema");
const restaurant = require("./restaurants.schema");
const deliveryPerson = require("./delivery-person.schema");
const orderDetails = require("./orders-details.schema");
const role = require("./roles.schema");
const deliveryOrder=require('./delivery-orders.schema')
const contact = require("./contact.schema");
module.exports = {
  user,
  order,
  brand,
  category,
  cuisine,
  item,
  tag,
  city,
  menu,
  image,
  restaurant,
  deliveryPerson,
  orderDetails,
  role,
  deliveryOrder,
  contact,
};
