//connect to database

const { default: mongoose } = require("mongoose");
const schemas = require("./schemas");
require("dotenv").config();
module.exports = {
  connect: () => {
    console.log(process.env.CONNECTION_MONGO);
    mongoose
      .connect(process.env.CONNECTION_MONGO, {
        useNewUrlParser: true,
        //useUnifiedTopology:true is meaning that the connection is open and ready to communicate with the database and false is meaning that the connection is not open
        //useUnifiedTopology: true,
      })
      .then(() => console.log("DB Connected Successfully✅"))
      .catch((err) => {
        console.log("error connectly to mongodb", err);
        //process.exit(1) is meaning that the connection is not open
        process.exit(1);
      });
  },
  schemas,
};
