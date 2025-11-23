import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import products from "../client/src/data/Products.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products imported!");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
