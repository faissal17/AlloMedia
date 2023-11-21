
const user = require("./users.schema");
const product = require("./products.schema");
const order = require("./orders.schema");
const brand = require("./brands.schema");
const category = require("./categories.schema");
const cuisine = require("./cuisines.schema");
const item=require('./items.schema')
const tag=require('./tags.schema')
const city=require('./cities.schema')
const image=require('./images.schema')

module.exports = {
  user,
  product,
  order,
  brand,
  category,
  cuisine,
  item,
  tag,
  city
};


module.exports={
    user,
    item,
    order,
    brand,
    tag,
    city,
    image
}
