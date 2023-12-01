const addContactController = require('./addContact.controller');
const deleteContactController = require('./deleteContact.controller');
const updateContactController = require('./updateContact.controller');
const getContactByIdOrNameController = require('./getContactById.controller');

module.exports = (dependencies) => {
    return {
        addContactController,
        deleteContactController,
        updateContactController,
        getContactByIdOrNameController
    };
};
