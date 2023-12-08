const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
const routes = require("./frameworks/expressSpecific/routes");
const mongoose = require("./frameworks/database/mongo/index");
const http = require("http");
const { Server } = require("socket.io");

const axios = require("axios");
const cors = require("cors");

// added Fake API
const MOCK_API = "https://jsonplaceholder.typicode.com/users/";

app.use(bodyParser.json());
app.use(cookieParser());
//this is for form data  urlencoded is meaning of form data extended is false means only string and array
app.use(bodyParser.urlencoded({ extended: false }));
const { connect: connectMongo } = require("./frameworks/database/mongo");

const allowedOrigins = ["http://54.234.96.95", "http://localhost:5173"];
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
    let onlineUsers = [];
    const addNewUser = (username, socketId) => {
      !onlineUsers.some((user) => user.username === username) &&
        onlineUsers.push({ username, socketId });
      console.log("from add function user 0");
      console.log(onlineUsers[0].socketId);
      console.log("all users");
      console.log(onlineUsers);
    };
    const getUser = (username) => {
      return onlineUsers.find((user) => user.username === username);
    };

    const server = http.createServer(app);
    const io = new Server(server, {
      cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
      },
    });
    let d = 0;

    io.on("connection", (socket) => {
      console.log(` this is the fucking id :${socket.id}`);

      // socket.on('user_registration',(data)=>{
      //   addNewUser(data, socket.id);
      //   socket.join(data)

      //   let count=1
      //   socket.emit("recevied_notification", count);
      //   console.log(`User with his this mae is: ${socket.id} is create account with this name ${data} `)
      // })

      socket.on("sendNotification", (data) => {
        console.log(data);
        io.emit("getNotification", {
          d: "you except notification",
        });
      });
      socket.on("sendNotificationJob", (data) => {
        console.log("its comming");
        console.log(data);
        io.emit("getNotificationJob", {
          data: data,
        });
      });

      socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
      });
    });
    //testing fake data
    //API Call
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;

      try {
        const response = await axios.get(`${MOCK_API}?email=${email}`);
        const user = response.data;
        console.log("User successfully retrieved from the API");
        res.status(200).send(user);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // socket.on("disconnect", () => {
    //   console.log("User Disconnected", socket.id);
    // });
    // })

    server.listen(PORT, () => {
      console.log(`Succeess FUcking running under port ${PORT}`);
      connectMongo();
    });
  },
};
