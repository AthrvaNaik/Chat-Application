import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";
import connectDB from "./DB/connect.js";
import cookieParser from "cookie-parser";


const app = express();

// Middleware: Parse JSON and cookies
app.use(express.json()); // Correct placement: Before routes
app.use(cookieParser());

// Connect to the database
connectDB();

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
