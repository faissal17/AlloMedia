const { Response} =require('../../frameworks/common')
const {getUserByIdUseCase} =require('../../useCases/users')
module.exports=async (req,res) =>{
    try{ 
        console.log('fuck are you')
        const {
            params={}
        }=req 
        const {id}=params
        const useCaseInstance =getUserByIdUseCase();
        const response=await useCaseInstance.execute({id})
        //https:§§domain/api/v1/users/:id
        res.json(new Response({
            status:true,
            content:response
        }))
        next()
    }catch(err){
        next(err)
    }
}