const { ProductModel } = require("../Models/product.model");

async function getProducts(req, res) {
  try {
    const products = await ProductModel.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error });
  }
}

async function addProducts(req, res) {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(200).json({ newProduct });
  } catch (error) {
    res.status(400).json({ error });
  }
}

module.exports = { getProducts, addProducts };
