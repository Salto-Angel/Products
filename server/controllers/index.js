const models = require("../models");

module.exports.getProduct = (req, res) => {
  models.getProduct(req.params.product_id).then(data => {
    res.send({
      id: data._id,
      name: data.name,
      slogan: data.slogan,
      default_price: data.default_price,
      features: data.features
    });
  });
};
