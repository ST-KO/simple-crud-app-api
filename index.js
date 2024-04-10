//DB password ablHpBKuUIePCIpk
//DB username scytherock74
//DB connectionString mongodb+srv://scytherock74:ablHpBKuUIePCIpk@cluster0.zhph1rc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.route");

const app = express();
const url =
  "mongodb+srv://scytherock74:ablHpBKuUIePCIpk@cluster0.zhph1rc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node api");
});

mongoose
  .connect(url)
  .then(() => {
    console.log("connect to db");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection fail");
  });
