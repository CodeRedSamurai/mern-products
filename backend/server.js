import express from "express";
import path from "path";
import dotenv from "dotenv";
import { conncetDB } from "./config/db.js";
import Product from "./model/product.model.js";
dotenv.config();
const currPath = path.resolve();
const app = express();

app.use(express.json());
console.log(process.env);

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
  }
});
app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide wrestler name" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "server Error" });
  }
});

if (process.env.NODE_ENV === "production") {
  console.log("eny");
  app.use(express.static(path.join(currPath, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(currPath, "frontend", "dist", "index.html"), {
      "Content-Type": "text/html",
    });
  });
}

app.listen(5000, () => {
  conncetDB();
  console.log("Server : http://localhost:5000");
});
//QAoQd7OYvt6XsguP
