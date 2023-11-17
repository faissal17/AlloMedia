const { Response} =require('../../frameworks/common')
const {addOrderUseCase} =require('../../useCases/orders')
module.exports=async (req,res)=>{
        try{
            const {
                userId,
                productsIds,
                date,
                isPayed,
                meta
            }=req.body 
            const useCaseInstance = addOrderUseCase();
            //const addProduct=addProductUseCase(dependencies)
            const addOrder= await  useCaseInstance.execute({ 
                userId,
                productsIds,
                date,
                isPayed,
                meta
            });
            
            res.json(new Response({
                status:true,
                content:addOrder
            }))
        }catch(err){
           // next(err)
        }
    
}