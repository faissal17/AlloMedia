const addCityController=require('./addCity.controller')
const deleteCityController=require('./deleteCity.controller')
const updateCityController=require('./updateCity.controller')
const getCityByIdController=require('./getCityById.controller')
const getAllCityController=require('./getAllCity.controller')


module.exports=dependencies=>{
    return {
        addCityController,
        deleteCityController,
        updateCityController,
        getCityByIdController,
        getAllCityController
    }
}