const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log("Connected to Mongo Successfully");
  });

  mongoose.connection
    .once("open", () => {
      console.log("Connected to DB");
    })
    .on("error", (error) => {
      console.log("Error :- ", error);
    });
};

module.exports = connectToMongo;



