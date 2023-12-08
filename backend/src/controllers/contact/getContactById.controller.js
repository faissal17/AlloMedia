const { Response } = require("../../frameworks/common");
const { getContactByIdUseCase } = require('../../useCases/contact');

module.exports = async (req, res) => {
    try {
        const { params = {} } = req;
        const { id } = params;

        const useCaseInstance = getContactByIdUseCase();
        const response = await useCaseInstance.execute({ id });

        res.json(new Response({
            status: true,
            content: response
        }));
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
