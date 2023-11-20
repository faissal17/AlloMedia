const {
    Response,
    ResponseError
} = require('../../common')


module.exports=(err,req,res,next)=>{
    console.log('fuck')
    
    const error=new ResponseError({
        status:err.status || 500,
        msg:err.msg || err.message || 'No Message',
        reason:err.reason || err.stack || 'Somebody Failed',
        url:req.originalUrl,
        ip:req.ip
    })

    req.status(error.status)
    res.json(new Response({
        status:false,
        error
    }))
}