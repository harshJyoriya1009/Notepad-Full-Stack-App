const mongoose = require('mongoose');

// const URL = "mongodb+srv://harshjyoriya:harsh789456123@cluster0.gikk3.mongodb.net";
const URL = "mongodb+srv://harshjyoriya:harsh789456123@cluster0.gikk3.mongodb.net/notepad?retryWrites=true&w=majority";


const connectToMongo = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectToMongo;