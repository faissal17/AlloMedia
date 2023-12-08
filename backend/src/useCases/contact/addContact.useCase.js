const {
    contactRepository,
} = require('../../frameworks/repositories/mongo');

module.exports = () => {
    if (!contactRepository) {
        throw new Error('The contact repository should exist in dependencies');
    }

    const execute = ({ email, subject, message }) => {
        // Validate input or perform any other necessary logic

        const contact = {
            email: email,
            subject: subject,
            message: message,
        };

        return contactRepository.add(contact);
    };

    return { execute };
};
