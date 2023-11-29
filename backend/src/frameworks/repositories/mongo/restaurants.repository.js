const mongoose = require("mongoose");
const entityName = "Restaurant";
const {
  schemas: { restaurant: restaurantSchema },
} = require("../../database/mongo");
const entityNameTags = "Tag";
const tagSchema = require("../../database/mongo/schemas/tags.schema");
const Tag = mongoose.model(entityNameTags, tagSchema);
const Restaurant = mongoose.model(entityName, restaurantSchema);
module.exports = {
  add: async (restaurant) => {
    const restaurants = new Restaurant(restaurant);
    return restaurants.save();
  },
  update: async (id, restaurant) => {
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
    return Restaurant.findByIdAndDelete(
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
    const restaurant = await Restaurant.findOne({
      slug: slug,
    })
      .populate("tags")
      .populate("categories")
      .populate("brands");

    if (!restaurant) {
      throw new Error(`Restaurant with ID ${slug} does not exists`);
    }
    console.log(restaurant);

    return restaurant;
  },
  getAll: async () => {
    const restaurant = await Restaurant.find()
      .populate("tags")
      .populate("categories")
      .populate("brands");
    if (!restaurant) {
      throw new Error(`restaurant does not exist or has been deleted.`);
    }
    return restaurant;
  },
  search: async (search) => {
    const restaurant = await Restaurant.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        {
          tags: {
            $in: await Tag.find({
              name: { $regex: search, $options: "i" },
            }).select("_id"),
          },
        },
      ],
    }).populate("tags");

    if (!restaurant) {
      throw new Error(`restaurant does not exist or has been deleted.`);
    }

    return restaurant;
  },
};
