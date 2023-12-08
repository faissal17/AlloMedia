const usersRepository = require("./users.repository");
const restaurantRepository = require("./restaurants.repository");
const brandsRepository = require("./brands.repository");
const tagsRepository = require("./tags.repository");
const citiesRepository = require("./cities.repository");
const itemsRepository = require("./products.repository");
const imagesRrpository = require("./images.repository");
const categoriesRepository = require("./categories.repository");
const cuisinesRepository = require("./cuisine.repository");
const deliveryPersonRepository = require("./delivery.person.repository");
const orderRepository = require("./orders.repository");
const menuRepository = require("./menu.repository");
const orderDetailsRepository = require("./orderDetails.repository");
const roleRepository = require("./roles.repository");
const contactRepository = require("./contact.repository");

module.exports = {
  usersRepository,
  brandsRepository,
  tagsRepository,
  citiesRepository,
  itemsRepository,
  imagesRrpository,
  restaurantRepository,
  categoriesRepository,
  cuisinesRepository,
  deliveryPersonRepository,
  orderRepository,
  menuRepository,
  orderDetailsRepository,
  roleRepository,
  contactRepository,
};
