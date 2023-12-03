const express = require("express");
const { contactController } = require("../../../controllers");
const auth = require("../middlewares/Auth");

module.exports = (dependencies) => {
    const router = express.Router();
    const {
        addContactController,
        deleteContactController,
        updateContactController,
        getContactByIdOrNameController,
    } = contactController(dependencies);

    router
        .route("/")
        .post(addContactController)
        .delete(auth.isAuthenticated, deleteContactController)
        .patch(auth.isAuthenticated, updateContactController);

    router.route("/:idOrName").get(getContactByIdOrNameController);

    return router;
};
