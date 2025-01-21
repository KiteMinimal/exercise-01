const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://0.0.0.0/BACKEND-TASK")
    .then(() => {
      console.log("connected to db from Shoyeb");
    })
    .catch((error) => {
      console.error("Error connecting to the database: ", error);
    });
};

module.exports = dbConnect;
