import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const databaseurl = process.env.DATABASE_URL;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use("/api/messages", messageRoutes);

app.post('')

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose
  .connect(databaseurl)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error::DB CONNECTION::", err.message));
