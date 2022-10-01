const mongoose = require("mongoose");

const jobGradeWiseLeaveSchema = mongoose.Schema({
    jbgr_id: {
    type: String,
    required: true,
  },
  jbgr_totalnol: {
    type: String,
    required: true,
  },
  jbgr_nocl: {
    type: String,
    required: true,
  },
  jbgr_nosl: {
    type: String,
    required: true,
  },
  jbgr_nool: {
    type: String,
    required: true,
  },
  
  
  
});

const JobGradeWiseLeave = mongoose.model("JobGradeWiseLeave", jobGradeWiseLeaveSchema);
module.exports = JobGradeWiseLeave;
