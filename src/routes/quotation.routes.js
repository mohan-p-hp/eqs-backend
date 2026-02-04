const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  createQuotation,
  getAllQuotations,
  getMyQuotations
} = require("../controllers/quotation.controller");

// CREATE QUOTATION (OWNER & EMPLOYEE)
router.post("/", auth(["OWNER", "EMPLOYEE"]), createQuotation);

// OWNER: VIEW ALL QUOTATIONS
router.get("/", auth(["OWNER"]), getAllQuotations);

// EMPLOYEE: VIEW OWN QUOTATIONS
router.get("/my", auth(["EMPLOYEE"]), getMyQuotations);

module.exports = router;
