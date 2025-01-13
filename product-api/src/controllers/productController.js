const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const { generateProductCode } = require("../utils/helpers");

/**
 * Create a new product.
 */
const createProduct = async (req, res) => {
  try {
    const { name, description, price, discount, image, status, categoryId } =
      req.body;

    // Validate category
    const category = await Category.findById(categoryId);
    if (!category)
      return res.status(404).json({ message: "Category not found" });

    // Generate product code
    const productCode = generateProductCode(name);

    const newProduct = new Product({
      name,
      description,
      price,
      discount,
      image,
      status,
      categoryId,
      productCode,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
};

module.exports = {
  createProduct,
};
