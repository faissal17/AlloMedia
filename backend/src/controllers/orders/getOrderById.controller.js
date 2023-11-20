const { Response} =require('../../frameworks/common')
const {getOrderByIdUseCase} =require('../../useCases/orders')
module.exports=async (req,res) =>{
    console.log('fuck of')
   
        
        try{
            console.log('totototo')
            
            const {id}=req.params
            console.log('tototototeeee')
            const useCaseInstance = getOrderByIdUseCase();

            console.log('before')
            // Call the execute method on the use case instance
            const getOrderId = await useCaseInstance.execute({ id });
            console.log('after')
            
            res.json(new Response({
                status:true,
                content:getOrderId
            }))
            //next()
        }catch(err){
            console.log(err)
        }
    
}