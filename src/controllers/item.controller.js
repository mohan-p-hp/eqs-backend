const Item = require("../models/Item");

// CREATE ITEM (OWNER)
exports.createItem = async (req, res) => {
  try {
    const item = await Item.create({
      ...req.body,
      createdBy: req.user.userId
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to create item" });
  }
};

// GET ALL ITEMS
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};

// SEARCH ITEMS
exports.searchItems = async (req, res) => {
  try {
    const query = req.query.q || "";

    const items = await Item.find({
      name: { $regex: query, $options: "i" }
    }).limit(10);

    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Search failed" });
  }
};

// UPDATE ITEM (OWNER)
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to update item" });
  }
};

// DELETE ITEM (OWNER)
exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete item" });
  }
};
