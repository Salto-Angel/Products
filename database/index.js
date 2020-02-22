const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/SDC", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("*************MONGO CONNECTED**************"));

const productSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [
    {
      feature: String,
      value: String
    }
  ],
  results: [
    {
      style_id: Number,
      name: String,
      original_price: String,
      sale_price: String,
      default: Number,
      photos: [
        {
          thumbnail_url: String,
          url: String
        }
      ],
      skus: {
        XS: Number,
        S: Number,
        M: Number,
        L: Number,
        XL: Number,
        XXL: Number
      }
    }
  ],
  related: [{ type: String }]
});

module.exports = mongoose.connection;

module.exports.Product = mongoose.model("Product", productSchema);
