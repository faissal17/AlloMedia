const addOrderDetailsController = require("./addOrderDetails.controller");
const deleteOrderDetailsController = require("./deleteOrderDetails.controller");
const getOneOrderDetailsController = require("./getOneOrderDetails.controller");

module.exports = () => {
  return {
    addOrderDetailsController,
    deleteOrderDetailsController,
    getOneOrderDetailsController,
  };
};
