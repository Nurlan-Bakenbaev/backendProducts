import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./config/db.js";
import productRouter from "./routes/productRouter.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRouter);
app.use("/api", productRouter);
app.use("/api", productRouter);

app.patch("/product/:id");
app.listen(3000, connectionDB(process.env.MONGO_DB_URL), () => {
  console.log("Server is running on port 3000");
});
