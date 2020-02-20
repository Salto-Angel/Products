const router = require("express").Router();
const controllers = require("../controllers");

// router.get("/list");
router.get("/:product_id", controllers.getProduct);
// router.get("/:product_id/styles");
// router.get("/:product_id/related");

module.exports = router;

// getTHings(req, res) {
//     req.params.id === 5
//     req.params.trevuuuyt
//     req.query.page === 1
// }

// localhost:300/5?page=1
