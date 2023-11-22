const { Response} =require('../../frameworks/common')
const { updateOrderUseCase } = require('../../useCases/orders')
module.exports=async (req,res)=>{
    try {
        const { body = {} } = req;
        const {
            id,
            ...updates
        } = req.body;
        const useCaseInstance=updateOrderUseCase()
        const response = await useCaseInstance.execute({
          order: {
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
        //next();
    } catch (err) {
        console.log(err)
    }
}