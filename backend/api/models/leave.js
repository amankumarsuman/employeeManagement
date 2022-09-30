const mongoose = require("mongoose");

const leaveSchema = mongoose.Schema({
    empl_id: {
    type: Number,
    required: true,
  },
  year_id: {
    type: Number,
    required: true,
  },
  eolv_date: {
    type: String,
    required: true,
  },
  eolv_leavetype: {
    type: String,
    required: true,
  },
  
  
});

const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave;
