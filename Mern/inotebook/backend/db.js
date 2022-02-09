require("dotenv").config();
const mongoose = require("mongoose");
const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
//console.log(process.env.MONGO_URL.toString());

const connectToMongo = () => {
  mongoose.connect(uri, () => {
    console.log("Connected to Server Succesfully");
  });

  // mongoose.connect(process.env.MONGO_URL, options, (err) => {
  //   if (err) console.log(err);
  //   else console.log("mongdb is connected");
  // });
};

module.exports = connectToMongo;
