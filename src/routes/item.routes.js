const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  createItem,
  getItems,
  searchItems,
  updateItem,
  deleteItem
} = require("../controllers/item.controller");

// OWNER only
router.post("/", auth(["OWNER"]), createItem);
router.put("/:id", auth(["OWNER"]), updateItem);
router.delete("/:id", auth(["OWNER"]), deleteItem);

// OWNER & EMPLOYEE
router.get("/", auth(["OWNER", "EMPLOYEE"]), getItems);
router.get("/search", auth(["OWNER", "EMPLOYEE"]), searchItems);

module.exports = router;
