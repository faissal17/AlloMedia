//connect to database
const mongoose = require("mongoose");

const url =
  "mongodb+srv://faissalaoukacha:johancruyff14@cluster0.byif7c3.mongodb.net/AlloMarhaba?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("isaaaaaaam");
});

module.exports = mongoose;
