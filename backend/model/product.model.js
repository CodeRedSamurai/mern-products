import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { required: true, type: String },
  billed: { required: true, type: String },
  champion: { required: true, type: String },
  era: { required: true, type: String },

});

const Product = mongoose.model("Product", productSchema);

export default Product;
