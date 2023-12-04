const mongoose = require("mongoose");
const entityName = "User";

const {
  schemas: { user: userSchema },
} = require("../../database/mongo");

const repository = () => {
  //schema
  const User = mongoose.model(entityName, userSchema);
  return {
    add: async (user) => {
      const mongoObject = new User(user);
      return mongoObject.save();
    },
    update: async (user) => {
      const { id, updates } = user;
      delete user.id;
      return User.findByIdAndUpdate(
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
    delete: async (user) => {
      const { id } = user;
      delete user.id;
      return User.findByIdAndUpdate(
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
      const user = await User.findOne({
        _id: id,
        deletedAt: {
          $exists: false,
        },
      });
      if (!user) {
        throw new Error(
          `User with ID ${id} does not exist or has been deleted.`
        );
      }
      return user;
    },
    getByEmail: async (user) => {
      const { email } = user;
      const _User = await User.findOne({
        email: email,
      }).populate("role");
      //   console.log(_User);
      if (!_User) {
        // throw new Error(`User with email ${email} does not exist.`);
        return "User with email ${email} does not exist.";
      }
      return _User;
    },
  };
};

module.exports = repository();
