const { Response } = require("../../frameworks/common");
const { deleteContactUseCase } = require('../../useCases/contact');

module.exports = async (req, res) => {
    try {
        const { body = {} } = req;
        const { id } = body;
        console.log('id:', id);

        const useCaseInstance = deleteContactUseCase();
        const response = await useCaseInstance.execute({
            contact: { id },
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
