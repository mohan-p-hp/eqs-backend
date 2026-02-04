const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema({
  quotationNo: {
    type: String,
    required: true
  },
  items: [
    {
      name: String,
      brand: String,
      unit: String,
      qty: Number,
      rate: Number,
      gst: Number,
      total: Number
    }
  ],
  grandTotal: {
    type: Number,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Quotation", quotationSchema);
