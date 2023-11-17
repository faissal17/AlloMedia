const { Response} =require('../../frameworks/common')
const { deleteOrderUseCase } = require('../../useCases/orders')
module.exports=async (req,res) =>{
    
        try{
            const {body={}}=req 
            const {
                id,
                name,
                description,
                images,
                price,
                color,
                meta
            }=body 
            const useCaseInstance=deleteOrderUseCase()
            const response=await useCaseInstance.execute({
                product:{
                    name,
                    description,
                    images,
                    price,
                    color,
                    meta,
                    id
                }
            })
            res.json(new Response({
                status:true,
                content:response
            }))
           // next()
        }catch(err){
            //next(err)
        }
    
}