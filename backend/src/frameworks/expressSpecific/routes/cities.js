const express=require('express')
const { cityController } = require("../../../controllers");

module.exports=dependencies =>{
    const router=express.Router()
    const {
        addCityController,
        deleteCityController,
        updateCityController,
        getCityByIdController,
        getAllCityController
    }=cityController(dependencies)

    router.route('/')
        .get(getAllCityController)
        .post(addCityController)
        .delete(deleteCityController)
        .patch(updateCityController)

    router.route('/:id').get(getCityByIdController)

    return router
}