const mongoose = require("mongoose");
const entityName = "Tags";

const {
  schemas: { tag: tagSchema },
} = require("../../database/mongo");

const repository = () => {
  //schema
  const Tag = mongoose.model(entityName, tagSchema);
  return {
    add: async (tags) => {
      console.log("repo");
      console.log(tags);

      if (!tags || !tags.name) {
        // Handle the case where tags or tags.name is undefined
        console.error("Tags or tags.name is undefined.");
        return; // or throw an error, depending on your use case
      }

      const tagNames = tags.name;
      console.log(tagNames);

      // Creating an array of tag objects
      const tagObjects = tagNames.map((tagName) => ({ name: tagName }));

      return Tag.insertMany(tagObjects);
    },
    update: async (tag) => {
      const { id, updates } = tag;
      delete tag.id;
      return Tag.findByIdAndUpdate(
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
    delete: async (tag) => {
      const { id } = tag;
      console.log("repository :", id);
      delete tag.id;
      return Tag.findByIdAndUpdate(
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
      console.log("fucking id", id);
      const tag = await Tag.findOne({
        _id: id,
      });
      if (!tag) {
        throw new Error(
          `Tag with ID ${id} does not exist or has been deleted.`
        );
      }
      return tag;
    },
    getAll: async () => {
      const tags = await Tag.find();
      if (!tags) {
        throw new Error(`tags does not exist or has been deleted.`);
      }
      return tags;
    },
  };
};

module.exports = repository();
