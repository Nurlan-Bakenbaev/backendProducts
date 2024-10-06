import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectionDB } from "./config/db.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(cookieParser());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", userRouter);
app.use("/api", productRouter);

app.patch("/product/:id");
app.listen(3000, connectionDB(process.env.MONGO_DB_URL), () => {
  console.log("Server is running on port 3000");
});
