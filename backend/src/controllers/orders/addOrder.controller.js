const { Response} =require('../../frameworks/common')
const {addOrderUseCase} =require('../../useCases/orders')
module.exports=async (req,res,next)=>{
        console.log('error')
        try{
            const {
                userId,
                productsIds,
                date,
                isPayed,
                meta
            }=req.body 
            throw {status:404,msg:'just a test',reason:'because we want'}
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
            console.error('Error in addOrder middleware:');
        }
    
}