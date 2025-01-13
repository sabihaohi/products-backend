const Category = require("../models/categoryModel");

/**
 * Create a new category.
 */
const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validate category name and description
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name and description are required" });
    }

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = new Category({
      name,
      description,
    });

    await newCategory.save();
    res.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating category", error: error.message });
  }
};

module.exports = { createCategory };
