import mongoose from "mongoose";

// const connectionString = "mongodb+srv://sakib863:sakib863@merncluster.i0sng.mongodb.net/next_js?retryWrites=true&w=majority&appName=mernCluster";
const connectionString = "mongodb://localhost:27017/next_js";

const connectDB = async () => {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(connectionString);
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
