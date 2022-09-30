const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  offEmail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  addr: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
  },
});

const userDetail = mongoose.model("UserDetail", userSchema);
module.exports = userDetail;
