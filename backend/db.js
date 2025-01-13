const mongoose = require('mongoose');

const URL = "mongodb+srv://harshjyoriya:harsh789456123@cluster0.gikk3.mongodb.net";

const connectToMongo = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToMongo;
