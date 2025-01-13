const express = require("express");
const { createProduct,getProducts,getProductByID,getProductByName,getProductByDiscount,getProductByCategory,updateProduct } = require("../controllers/productController");

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductByID);
router.get("/name/:name", getProductByName);
router.get("/discount/:discount", getProductByDiscount);
router.get("/category/:category", getProductByCategory);
router.put("/update/:id", updateProduct);


module.exports = router;
