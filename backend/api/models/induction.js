const mongoose = require("mongoose");

const inductionSchema = mongoose.Schema({
  indc_id: {
    type: Number,
    required: true,
  },
  indc_emof_id: {
    type: Number,
    required: true,
  },
  indc_date: {
    type: String,
    required: true,
  },
  indc_processed_ausr_id: {
    type: Number,
    required: true,
  },
  indc_status: {
    type: String,
    required: true,
  },
  
});

const Induction = mongoose.model("Induction", inductionSchema);
module.exports = Induction;
