const { Response} =require('../../frameworks/common')
const { deleteOrderUseCase } = require('../../useCases/orders')
module.exports=async (req,res) =>{
    try {
        const {id} = req.body;
        console.log('id:',id)
        const useCaseInstance=deleteOrderUseCase()
        const response = await useCaseInstance.execute(id);
        res.json(
          new Response({
            status: true,
            content: response,
          })
        );
        //next();
      } catch (err) {
        //next(err);
        console.log(err)
      }
}