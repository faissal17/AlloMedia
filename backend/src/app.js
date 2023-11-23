const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
const routes = require("./frameworks/expressSpecific/routes");
const mongoose = require("./frameworks/database/mongo/index");
const http=require('http')
const { Server } = require("socket.io");

const cors = require("cors");






app.use(bodyParser.json());
app.use(cookieParser());
//this is for form data  urlencoded is meaning of form data extended is false means only string and array
app.use(bodyParser.urlencoded({ extended: false }));
const { connect: connectMongo } = require("./frameworks/database/mongo");

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
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.use(bodyParser.urlencoded({ extended: false }));
    const apiRoutes = routes();
    app.use("/api/v1", apiRoutes);
    //app.use(ErrorHandler)

    //this is for form data  urlencoded is meaning of form data extended is false means only string and array
    const server=http.createServer(app)
    const io = new Server(server,{
      cors:{
        origin: 'http://localhost:5173',
        methods: ["GET","POST"]
      }
    })
    io.on('connection',(socket)=>{
      console.log(` this is the fucking id :${socket.id}`)
      socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
      });
    })

    server.listen(PORT, () => {
      console.log(`Succeess FUcking running under port ${PORT}`);
      connectMongo();
    });
  },
};
