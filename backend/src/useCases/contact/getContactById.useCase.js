const { contactRepository } = require('../../frameworks/repositories/mongo');

module.exports = () => {
    if (!contactRepository) {
        throw new Error('The contact repository should exist in dependencies');
    }

    const execute = ({ id }) => {
        return contactRepository.getById(id);
    };

    return { execute };
};
