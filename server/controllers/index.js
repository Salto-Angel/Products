const models = require("../models");

module.exports.getList = (req, res) => {
  let page = req.query.page || 1;
  let count = (req.query.count || 5) > 10000 ? 10000 : req.query.count;
  let start = (page - 1) * count + 1;

  models
    .getList(start, Number(count))
    .then(data => res.send(data))
    .catch(() => res.sendStatus(500));
};

module.exports.getProductInfo = (req, res) => {
  models
    .getProductInfo(req.params.product_id)
    .then(data => {
      res.send({
        id: data._id,
        name: data.name,
        slogan: data.slogan,
        description: data.description,
        category: data.category,
        default_price: data.default_price,
        features: data.features
      });
    })
    .catch(() => res.sendStatus(500));
};

module.exports.getStyles = (req, res) => {
  models
    .getStyles(req.params.product_id)
    .then(data => {
      res.send({
        id: data._id,
        results: data.styles
      });
    })
    .catch(() => res.sendStatus(500));
};

module.exports.getRelated = (req, res) => {
  models
    .getRelated(req.params.product_id)
    .then(({ related }) => res.send(related.map(obj => obj.related_product_id)))
    .catch(() => res.sendStatus(500));
};
