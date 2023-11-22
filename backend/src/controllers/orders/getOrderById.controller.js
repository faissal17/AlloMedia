const { Response} =require('../../frameworks/common')
const {getOrderByIdUseCase} =require('../../useCases/orders')
module.exports=async (req,res) =>{
    try{ 
        console.log('fuck are youddd')
        const {id}=req.params
        console.log(id)
        const useCaseInstance = getOrderByIdUseCase();
        
        console.log(id)
        const response=await useCaseInstance.execute(id)
        //https:§§domain/api/v1/users/:id
        res.json(new Response({
            status:true,
            content:response
        }))
        //next()
    }catch(err){
        //next(err)
        res.status(400).json({msg:err.message})
    }
}