const { Products, ProductFeature } = require("../../database");

module.exports.getList = (id, limit) =>
  Products.find(
    { _id: { $gte: id } },
    { features: 0, styles: 0, related: 0 }
  ).limit(limit);

module.exports.getProductInfo = id => Products.findById(id);

module.exports.getStyles = id =>
  Products.findById(id, {
    name: 0,
    slogan: 0,
    description: 0,
    category: 0,
    default_price: 0,
    features: 0,
    "styles.photos.style_id": 0,
    "styles.photos._id": 0,
    "styles.skus.style_id": 0,
    "styles.skus._id": 0,
    "styles.product_id": 0,
    "styles._id": 0
  });

module.exports.getRelated = id =>
  Products.findById(id, {
    styles: 0,
    name: 0,
    slogan: 0,
    description: 0,
    category: 0,
    default_price: 0,
    features: 0,
    "related.product_id": 0
  });
