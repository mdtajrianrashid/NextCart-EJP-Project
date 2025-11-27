import mongoose from "mongoose";

export default async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected to:", mongoose.connection.name);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}