const { Response} =require('../../frameworks/common')
const {addProductUseCase} =require('../../useCases/products')
module.exports=async (req,res)=>{
        try{
            const {
                name,
                description,
                images,
                price,
                color,
                meta
            }=req.body 
            console.log('prodycs')
            console.log(req.body)
            const useCaseInstance = addProductUseCase();
            //const addProduct=addProductUseCase(dependencies)
            const addProduct= await  useCaseInstance.execute({ 
                name,
                description,
                images,
                price,
                color,
                meta 
            });
            
            res.json(new Response({
                status:true,
                content:addProduct
            }))
        }catch(err){
           // next(err)
        }
    
}