const express = require("express");
const {
  getProducts,
  getSingleProduct,
  createProducts,
  updateSingleProduct,
  deleteSingleProduct,
} = require("../controller/product.controller");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", createProducts);

router.patch("/:id", updateSingleProduct);

router.delete("/:id", deleteSingleProduct);

module.exports = router;
