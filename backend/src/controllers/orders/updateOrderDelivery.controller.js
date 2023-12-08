const { Response} =require('../../frameworks/common')
const { updateOrderDeliveryUseCase } = require('../../useCases/orders')
module.exports=async (req,res)=>{
    try {
        const { body = {} } = req;
        console.log('controller')
        console.log(req.body)
        const {
            id,
            ...updates
        } = req.body;
        const useCaseInstance=updateOrderDeliveryUseCase ()
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