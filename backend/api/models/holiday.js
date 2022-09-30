const mongoose = require("mongoose");

const holidaySchema = mongoose.Schema({
    year_id: {
    type: Number,
    required: true,
  },
  hday_date: {
    type: String,
    required: true,
  },
  hday_title: {
    type: String,
    required: true,
  },
  hday_type: {
    type: String,
    required: true,
  },
  
  
});

const Holiday = mongoose.model("Holiday", holidaySchema);
module.exports = Holiday;
