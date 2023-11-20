const { Response} =require('../../frameworks/common')
const {getBrandByIdUseCase} =require('../../useCases/brands')
module.exports=async (req,res) =>{
    try{ 
        console.log('fuck are you')
        const {
            params={}
        }=req 
        const {id}=req.params
        const useCaseInstance =getBrandByIdUseCase();
        const response=await useCaseInstance.execute({id})
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