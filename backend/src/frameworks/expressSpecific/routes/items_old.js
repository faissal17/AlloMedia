const express = require("express");
const { itemController } = require("../../../controllers");
const { Response } = require("../../common");
const auth = require("../middlewares/Auth");


const redis = require('redis');
const { createClient} =require('redis')

const redisClient = redis.createClient({
    legacyMode: true,
    PORT: 6379
  })




  redisClient.connect().catch(console.error)
module.exports=dependencies =>{
    const router=express.Router()
    const {
        addItemController,
        deleteItemController,
        updateItemController,
        getItemByIdController,
        getAllItemController
    }=itemController(dependencies)

    router.route('/')
        .get((req,res,next)=>{
            let item='items'
            try{
                redisClient.get(item, async (err, response) => {
                    //console.log(response);
                    if(response) {
                        
                      // console.log("User successfully retrieved from cache");
                      // console.log(JSON.parse(response))
                      // console.log('fuck from here')
                     
                      res.json(
                        new Response({
                          status: true,
                          content: JSON.parse(response),
                        })
                      );
                    } else {
                      next()
                    }
                })
            }catch(err){
                console.log('fucking error',err)
            }
        },getAllItemController)
        .post(auth.isManager,addItemController)
        .delete(auth.isManager,deleteItemController)
        .patch(auth.isManager,updateItemController)


  router.route("/:id").get(getItemByIdController);

  return router;
};
