const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  inCart: {
    type:Boolean,
  },
  category: {
    type:String,
  }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
