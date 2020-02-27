const router = require("express").Router();
const controllers = require("../controllers");

router.get("/list", controllers.getList);
router.get("/:product_id", controllers.getProductInfo);
router.get("/:product_id/styles", controllers.getStyles);
router.get("/:product_id/related", controllers.getRelated);

module.exports = router;

// getTHings(req, res) {
//     req.params.id === 5
//     req.params.trevuuuyt
//     req.query.page === 1
// }

// localhost:300/5?page=1
