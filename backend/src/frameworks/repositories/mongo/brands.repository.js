const mongoose = require("mongoose");
const entityName = "Brand";

const {
  schemas: { brand: brandSchema },
} = require("../../database/mongo");

const repository = () => {
  //schema
  const Brand = mongoose.model(entityName, brandSchema);

  return {
    add: async (brand) => {
      const mongoObject = new Brand(brand);
      return mongoObject.save();
    },
    update: async (brand) => {
      const { id, updates } = brand;
      delete brand.id;
      return Brand.findByIdAndUpdate(
        id,
        {
          ...updates,
          updatedAt: new Date(),
        },
        {
          new: true,
        }
      );
    },
    delete: async (brand) => {
      const { id } = brand;
      console.log("repository :", id);
      delete brand.id;
      return Brand.findByIdAndDelete(
        id,
        {
          deletedAt: new Date(),
        },
        {
          new: true,
        }
      );
    },
    getById: async (id) => {
      const brand = await Brand.findOne({
        _id: id,
        deletedAt: {
          $exists: false,
        },
      });
      if (!brand) {
        throw new Error(`Brand with ID ${id} does not exist or has been deleted.`);
      }
      return brand;
    },
    getAll: async () => {
      const brands = await Brand.find().populate("user");
      console.log('fucking brands')
      console.log(brands)
      if (!brands) {
        throw new Error(`brands do not exist or have been deleted.`);
      }
      return brands;
    },
  };
};

module.exports = repository();
