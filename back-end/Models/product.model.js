const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    brand: { type: String, required: true },
    color: { type: String, required: true },
    title: { type: String, required: true },
    size: { type: Object, required: true },
    sellingPrice: { type: Number, required: true },
    marketPrice: { type: Number, required: true },
    percentageDiscount: { type: Number },
    faltDiscount: { type: Number },
    inventory: { type: Number, required: true },
    collections: { type: String, required: true },
    subCollection: { type: String, required: true },
    gender: { type: String, required: true },
    category: { type: String, required: true },
    sellerId: { type: Object, required: true },
  },
  {
    versionKey: false,
    timesStamp: true,
  }
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = { ProductModel };
