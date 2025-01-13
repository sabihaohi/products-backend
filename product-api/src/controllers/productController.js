const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const { generateProductCode } = require("../utils/helpers");

//create product
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

//get products
const getProducts = async (req, res) => {
  try {
    const { category, name } = req.query;

    let filter = {};
    if (category) {
      const categoryObj = await Category.findOne({ name: category });
      if (categoryObj) filter.categoryId = categoryObj._id;
    }
    if (name) filter.name = new RegExp(name, "i");

    const products = await Product.find(filter)
      .populate("categoryId", "name")
      .exec();

    // Calculate the final price after discount
    const productsWithPrices = products.map((product) => {
      const finalPrice =
        product.price - (product.price * product.discount) / 100;
      return { ...product.toObject(), finalPrice };
    });

    res.status(200).json(productsWithPrices);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};

//get products by id
const getProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
      .populate("categoryId", "name")
      .exec();
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ ...product.toObject() });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
};

//get product by name
const getProductByName = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await Product.findOne({ name: name })
      .populate("categoryId", "name")
      .exec();
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ ...product.toObject() });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
};

module.exports = {
  createProduct,getProducts,getProductByID,getProductByName
};
