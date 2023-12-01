const { contactRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
    if (!contactRepository) {
        throw new Error("The contact repository should exist in dependencies");
    }

    const execute = ({ contact }) => {
        console.log("use cases:", contact);
        return contactRepository.delete(contact);
    };

    return { execute };
};
