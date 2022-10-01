const mongoose = require("mongoose");

const jobGradeWiseHolidaySchema = mongoose.Schema({
    jbgr_id: {
    type: String,
    required: true,
  },
  jbgr_totalnoh: {
    type: String,
    required: true,
  },
 
  
  
  
});

const JobGradeWiseHoliday = mongoose.model("JobGradeWiseHoliday", jobGradeWiseHolidaySchema);
module.exports = JobGradeWiseHoliday;
