import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: String,
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productsSchema);
export default Product;
