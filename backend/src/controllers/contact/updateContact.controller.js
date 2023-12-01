const { Response } = require("../../frameworks/common");
const { updateContactUseCase } = require('../../useCases/contact');

module.exports = async (req, res) => {
    try {
        const { body = {} } = req;
        const { id, ...updates } = body;

        const useCaseInstance = updateContactUseCase();
        const response = await useCaseInstance.execute({
            contact: {
                id,
                updates
            },
        });

        res.json(
            new Response({
                status: true,
                content: response,
            })
        );
    } catch (err) {
        console.log(err);
        res.status(500).json(
            new Response({
                status: false,
                message: 'Internal Server Error',
            })
        );
    }
};

