const { Response} =require('../../frameworks/common')
const {addOrderUseCase} =require('../../useCases/orders')
module.exports=async (req,res)=>{
    try {
        const {
           ...order
      } = req.body;

        console.log('Controller Order')
        console.log(req.body)
        console.log('-------------------------------------------------------------------')
        const useCaseInstance = addOrderUseCase();
        const addOrder = await useCaseInstance.execute(order)
        res.json(
          new Response({
            status: true,
            content: addOrder,
          })
        );
      } catch (err) {
        console.log(err)
    }
}