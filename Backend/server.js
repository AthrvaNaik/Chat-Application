import dotenv from "dotenv";
dotenv.config();
import path from 'path';

import express from "express";
import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";
import connectDB from "./DB/connect.js";
import cookieParser from "cookie-parser";

import { app as socketApp, server, io } from "./Socket/socket.js"; // Rename 'app' to 'socketApp'

const PORT = process.env.PORT || 8000;
const __dirname=path.resolve()

const app = express(); // No conflict now

// Middleware: Parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Connect to the database
connectDB();

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend","dist","index.html"));
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
