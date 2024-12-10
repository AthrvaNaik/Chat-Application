import mongoose from "mongoose";

const connectDB = async () => {
    try {
      console.log("Mongo URI:", process.env.MONGO_URI); // Debug log
      await mongoose.connect(process.env.MONGO_URI);
      console.log("DB connected");
    } catch (error) {
      console.log("DB connection error::", error);
    }
  };
  
export default connectDB;