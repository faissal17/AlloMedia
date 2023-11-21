const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
const routes = require("./frameworks/expressSpecific/routes");
const mongoose = require("./frameworks/database/mongo/index");




//
// const {S3Client,GetObjectCommand}=require('@aws-sdk/client-s3')
// const {getSignedUrl}=require('@aws-sdk/s3-request-presigner')
//





app.use(bodyParser.json());
app.use(cookieParser());
//this is for form data  urlencoded is meaning of form data extended is false means only string and array
app.use(bodyParser.urlencoded({ extended: false }));
const apiRoutes = routes();
const { connect: connectMongo } = require("./frameworks/database/mongo");
const cors = require("cors");
app.use("/api/v1", apiRoutes);
const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

module.exports = {
  start: () => {
    //
    
    
    // const s3Client=new S3Client({
    //     region:"us-east-1",
    //     credentials:{
    //         accessKeyId:'AKIATGEB5CLT3WGB6Y5Z',
    //         secretAccessKey:'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'
    //     }
    // }) 

    // async function getObjectURL(key){
    //     const command=new GetObjectCommand({
    //         Bucket:'testing-delivery',
    //         Key:key
    //     })
    //     const url=await getSignedUrl(s3Client,command)
    //     return url 
    // }
    // //
    // async function init(){
    //   console.log('URL fucking for 21.png',await getObjectURL("21.png"))
    // }
    // init()
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.use(bodyParser.urlencoded({ extended: false }));
    const apiRoutes = routes();
    app.use("/api/v1", apiRoutes);
    //app.use(ErrorHandler)

    //this is for form data  urlencoded is meaning of form data extended is false means only string and array

    app.listen(PORT, () => {
      console.log(`Succeess FUcking running under port ${PORT}`);
      connectMongo();
    });
  },
};
