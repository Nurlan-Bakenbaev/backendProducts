import express from "express";
import { connectionDB } from "./config/db.js";
import Product from "./models/product.model.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/product", async (req, res) => {
  const product = req.body;
  if (!product.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, quantity: products.length, data: products });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
app.patch("/product/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, img } = req.body.product;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        img,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
app.listen(3000, connectionDB(process.env.MONGO_DB_URL), () => {
  console.log("Server is running on port 3000");
});
