const express = require("express");
const { itemController } = require("../../../controllers");
const { Response } = require("../../../frameworks/common");
const auth = require("../middlewares/Auth");






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
        .get(getAllItemController)
        .post(auth.isManager,addItemController)
        .delete(auth.isManager,deleteItemController)
        .patch(auth.isManager,updateItemController)


  router.route("/:id").get(getItemByIdController);

  return router;
};
