import express from "express";
import {
  getAllProducts,
  updateProduct,
  deleteProduct,
  postProduct,
} from "../controllers/productsControllers.js";
const productRouter = express.Router();

productRouter.route("/product").get(getAllProducts).post(postProduct);
productRouter.route("/product").patch(updateProduct).delete(deleteProduct);
export default productRouter;
