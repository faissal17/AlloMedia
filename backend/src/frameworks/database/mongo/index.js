//connect to database
const mongoose = require("mongoose");

const url =
  "mongodb+srv://faissalaoukacha:johancruyff14@cluster0.byif7c3.mongodb.net/AlloMarhaba?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("isaaaaaaam");
});

module.exports = mongoose;
const {default : mongoose}=require('mongoose');
const schemas=require('./schemas')
require('dotenv').config()
module.exports={
    connect:()=>{
        mongoose.connect(process.env.CONNECTION_MONGOs,{
            useNewUrlParser:true,
            //useUnifiedTopology:true is meaning that the connection is open and ready to communicate with the database and false is meaning that the connection is not open
            useUnifiedTopology:true,
        })
        .then(()=>console.log('DB Connected Successfully✅'))
        .catch(
            (err)=>{
                console.log('error connectly to mongodb',err)
                //process.exit(1) is meaning that the connection is not open
                process.exit(1)
            })
    },
    schemas
}
