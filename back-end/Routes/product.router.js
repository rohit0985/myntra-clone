const express = require("express");
const {
  getProducts,
  addProducts,
} = require("../Controllers/product.controller");
const ProductRouter = express.Router();

ProductRouter.get("/", getProducts);
ProductRouter.post("/add", addProducts);

module.exports = { ProductRouter };
