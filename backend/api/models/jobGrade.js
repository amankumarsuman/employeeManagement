const mongoose = require("mongoose");

const jobGradeSchema = mongoose.Schema({
    jbgr_id: {
    type: String,
    required: true,
  },
  jbgr_name: {
    type: String,
    required: true,
  },
  jbgr_desc: {
    type: String,
    required: true,
  },
 
  
  
  
});

const JobGrade = mongoose.model("JobGrade", jobGradeSchema);
module.exports = JobGrade;
