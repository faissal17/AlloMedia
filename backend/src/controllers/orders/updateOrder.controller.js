const { Response} =require('../../frameworks/common')
const { updateOrderUseCase } = require('../../useCases/orders')
module.exports=async (req,res)=>{
        try{
            const {body={}}=req 
            const {
                userId,
                productsIds,
                date,
                isPayed,
                meta,
                id
            }=body 
            const useCaseInstance=updateOrderUseCase()
            const response=await useCaseInstance.execute({
                order:{
                    id,
                    userId,
                    productsIds,
                    date,
                    isPayed,
                    meta,
                    
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