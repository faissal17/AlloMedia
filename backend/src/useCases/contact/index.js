const addContactUseCase = require('./addContact.useCase');
const updateContactUseCase = require('./updateContact.useCase');
const deleteContactUseCase = require('./deleteContact.useCase');
const getContactByIdUseCase = require('./getContactById.useCase');
const getContactByIdAndNameUseCase = require('./getContactByIdAndName.useCase');
const getContactByIdOrNameUseCase = require('./getContactByIdOrName.useCase');

module.exports = {
    addContactUseCase,
    updateContactUseCase,
    deleteContactUseCase,
    getContactByIdUseCase,
    getContactByIdAndNameUseCase,
    getContactByIdOrNameUseCase,
}
