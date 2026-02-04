const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  createEmployee,
  getEmployees
} = require("../controllers/user.controller");

// OWNER ONLY
router.post("/", auth(["OWNER"]), createEmployee);
router.get("/", auth(["OWNER"]), getEmployees);

module.exports = router;
