const addCityController=require('./addCity.controller')
const deleteCityController=require('./deleteCity.controller')
const updateCityController=require('./updateCity.controller')
const getCityByIdController=require('./getCityById.controller')


module.exports=dependencies=>{
    return {
        addCityController,
        deleteCityController,
        updateCityController,
        getCityByIdController
    }
}