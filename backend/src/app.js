const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const PORT=process.env.PORT || 3000
const routes=require('./frameworks/expressSpecific/routes');
const ErrorHandler= require('./frameworks/expressSpecific/middlewares')
const { connect: connectMongo } =require('./frameworks/database/mongo')

        

module.exports={
    start:()=>{
        app.use(bodyParser.json())
        app.use(cookieParser());
        
        app.use(bodyParser.urlencoded({ extended: false }))        
        const apiRoutes = routes();
        app.use('/api/v1', apiRoutes);
        //app.use(ErrorHandler)

        //this is for form data  urlencoded is meaning of form data extended is false means only string and array
        
        app.listen(PORT,()=>{
            console.log(`Succeess FUcking running under port ${PORT}`)
            connectMongo()
        })
    }
}