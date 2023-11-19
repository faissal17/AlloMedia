const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
const routes = require("./frameworks/expressSpecific/routes");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cookieParser());
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

app.use(cors(corsOptions));
//this is for form data  urlencoded is meaning of form data extended is false means only string and array
app.use(bodyParser.urlencoded({ extended: false }));
const apiRoutes = routes();
app.use("/api/v1", apiRoutes);

module.exports = {
  start: () => {
    app.listen(PORT, () => {
      console.log(`Succeess FUcking running under port ${PORT}`);
    });
  },
};
