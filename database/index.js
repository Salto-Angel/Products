const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/SDC", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("*************MONGO CONNECTED**************"));

const productSchema = new mongoose.Schema(
  {
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
    styles: [
      {
        _id: Number,
        style_id: Number,
        product_id: Number,
        name: String,
        original_price: String,
        sale_price: String,
        ["default?"]: Number,
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
    related: [{ related_product_id: Number }]
  },
  { collection: "Products" }
);

const productFeatureSchema = new mongoose.Schema({
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
  ]
});

module.exports = mongoose.connection;

module.exports.Products = mongoose.model("Products", productSchema);
module.exports.ProductFeature = mongoose.model(
  "ProductFeature",
  productFeatureSchema
);
