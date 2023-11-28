const mongoose = require("mongoose");
const entityName = "Restaurant";
const {
  schemas: { restaurant: restaurantSchema},
} = require("../../database/mongo");

const Restaurant = mongoose.model(entityName, restaurantSchema);
module.exports = {
  add: async (restaurant) => {
    const restaurants = new Restaurant(restaurant);
    return restaurants.save();
  },
  update: async (id, restaurant) => {
    console.log("restaurant repository", restaurant);
    // const { id , updates }=restaurant
    return Restaurant.findByIdAndUpdate(
      id,
      {
        ...restaurant,
        updatedAt: new Date(),
      },
      {
        new: true,
      }
    );
  },
  delete: async (id) => {
    console.log("delete repository ", id);
    return Restaurant.findByIdAndUpdate(
      id,
      {
        deleted_at: new Date(),
      },
      {
        new: true,
      }
    );
  },
  getById: async (slug) => {
    console.log("slug", slug);
    const restaurant = await Restaurant.findOne({
      slug: slug,
    });
    if (!restaurant) {
      throw new Error(`Restaurant with ID ${slug} does not exists`);
    }
    console.log(restaurant);

    return restaurant;
  },
  getAll: async () => {
    console.log('reposutiry rest')
    const restaurant = await Restaurant.find();
    console.log(restaurant)
    if (!restaurant) {
      throw new Error(`restaurant does not exist or has been deleted.`);
    }
    return restaurant;
  },
  search: async (search) => {
    const restaurant = await Restaurant.find({
      $or: [{ name: { $regex: search, $options: "i" } }],
    });
    if (!restaurant) {
      throw new Error(`restaurant does not exist or has been deleted.`);
    }
    return restaurant;
  },
};
