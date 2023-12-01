const { Response } = require("../../frameworks/common");
const { addContactUseCase } = require('../../useCases/contact'); // Make sure to replace with the correct path

module.exports = async (req, res) => {
    try {
        const { email, subject, message } = req.body;
        console.log('Controller');
        console.log(req.body);
        console.log('-------------------------------------------------------------------');

        const useCaseInstance = addContactUseCase(); // Replace with the correct use case
        const addContact = await useCaseInstance.execute({
            email,
            subject,
            message,
        });

        res.json(
            new Response({
                status: true,
                content: addContact,
            })
        );
    } catch (err) {
        console.error(err);
        res.status(500).json(
            new Response({
                status: false,
                message: 'Internal Server Error',
            })
        );
    }
};
