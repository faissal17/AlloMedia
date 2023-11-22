const { Response} =require('../../frameworks/common')
const { updateProducUseCase } = require('../../useCases/products')
{updateProducUseCase}
module.exports=async (req,res)=>{
        try{
            const {body={}}=req 
            const {
                name,
                description,
                images,
                price,
                color,
                meta,
                id
            }=body 
            const useCaseInstance=updateProducUseCase()
            const response=await useCaseInstance.execute({
                product:{
                    name,
                    description,
                    images,
                    price,
                    color,
                    meta ,
                    id
                }
            })
            res.json(new Response({
                status:true,
                content:response
            }))
            //next()
        }catch(err){
            //next(err)
        }
}