import mongoose from "mongoose";


const connectDB = async () => {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(process.env.connectionString);
      console.log("Connected to MongoDB Atlas");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); 
    }
  } else {
    console.log("Already connected to MongoDB Atlas");
  }
};

export default connectDB;
