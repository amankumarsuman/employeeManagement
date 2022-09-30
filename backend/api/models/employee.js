const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    empl_id: {
    type: Number,
    required: true,
  },
  empl_firstname: {
    type: String,
    required: true,
  },
  empl_lastname: {
    type: String,
    required: true,
  },
  empl_surname: {
    type: String,
    required: true,
  },
  empl_rmanager_empl_id: {
    type: Number,
    required: true,
  },
  empl_hr_empl_id: {
    type: Number,
    required: true,
  },
  empl_jbgr_id: {
    type: Number,
    required: true,
  },
  empl_photo: {
    type: String,

  },
  empl_joindate: {
    type: String,
  },
  empl_dob: {
    type: String,
  },
  empl_designation: {
    type: String,
  },
  empl_offemail: {
    type: String,
  },
  empl_pemail: {
    type: String,
  },
  empl_mobile: {
    type: Number,
  },
  empl_altemail: {
    type: String,
  },
  empl_bloodgroup: {
    type: String,
  },
  empl_gender: {
    type: String,
  },
  empl_luudate: {
    type: String,
  },
  empl_luuser: {
    type: String,
  },
  empl_address: {
    type: String,
  },
  empl_fathername: {
    type: String,
  },
  empl_status: {
    type: String,
  },
 
 
  
 
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
