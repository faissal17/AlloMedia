const express=require('express')
const { imageController } = require("../../../controllers");

const {S3Client,GetObjectCommand,PutObjectCommand, PutObjectAclCommand}=require('@aws-sdk/client-s3')
const {getSignedUrl}=require('@aws-sdk/s3-request-presigner')
const multer=require('multer')

    const s3Client=new S3Client({
        region:"us-east-1",
        credentials:{
            accessKeyId:'AKIATGEB5CLT3WGB6Y5Z',
            secretAccessKey:'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'
        }
    }) 

    const bucketName="testing-delivery"

    async function getObjectURL(key){
        const command=new GetObjectCommand({
            Bucket:'testing-delivery',
            Key:key
        })
        const url=await getSignedUrl(s3Client,command)
        return url 
    }
    //
    async function init(){
      console.log('URL fucking for 21.png',await getObjectURL("21.png"))
    }
    init()


module.exports=dependencies =>{
    const storage=multer.memoryStorage()
    const upload=multer({storage:storage})

    
    const router=express.Router()
    const {
        addImagesController,
        updateImagesController,
        deleteImagesController,
        getImagesByIdController
    }=imageController(dependencies)

    router.route('/')
        .post(upload.single('image'),async (req,res)=>{
            console.log('fuckit')
            console.log('req.body',req.body)
            console.log('req.file',req.file)

            req.file.buffer
            const params={
                Bucket:bucketName,
                Key:req.file.originalname,
                Body:req.file.buffer,
                ContentType:req.file.mimetype
            }
            const command = new PutObjectCommand(params)
            await s3Client.send(command)
        })
        .delete(deleteImagesController)
        .patch(updateImagesController)

    router.route('/:id').get(getImagesByIdController)

    return router
}