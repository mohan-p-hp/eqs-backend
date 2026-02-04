const Quotation = require("../models/Quotation");

// CREATE QUOTATION (OWNER & EMPLOYEE)
exports.createQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.create({
      quotationNo: `Q-${Date.now()}`,
      items: req.body.items,
      grandTotal: req.body.grandTotal,
      createdBy: req.user.userId
    });

    res.status(201).json({
      message: "Quotation saved successfully",
      quotation
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to save quotation" });
  }
};

// OWNER: GET ALL QUOTATIONS
exports.getAllQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.find()
      .populate("createdBy", "name username");

    res.json(quotations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch quotations" });
  }
};

// EMPLOYEE: GET MY QUOTATIONS
exports.getMyQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.find({
      createdBy: req.user.userId
    });

    res.json(quotations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch my quotations" });
  }
};
