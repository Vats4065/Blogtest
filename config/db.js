const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vatsalrlakhani2626:blog@cluster0.pv1oapm.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { conn };
