const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
});

const product = mongoose.model("PRODUCT", productSchema);
module.exports = product;
