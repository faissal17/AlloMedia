const addDeliveryUseCase = require("./addDeliveryPerson.useCase");
const getDeliveryByIdUseCase = require("./getDeliveryById.useCase");
const updateDeliveryUseCase = require("./updateDelivery.useCase");
const deleteDeliveryUseCase = require("./deleteDeliveryPerson.useCase");
const getAlldeliveryPersonUseCase=require('./getAllDeliveryPerson.useCase')
module.exports = {
  addDeliveryUseCase,
  getDeliveryByIdUseCase,
  updateDeliveryUseCase,
  deleteDeliveryUseCase,
  getAlldeliveryPersonUseCase
};
