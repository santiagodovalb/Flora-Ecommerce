const router = require("express").Router();
const ReviewController = require('../controllers/reviewController')

router.post("/:id/add", ReviewController.findOrCreate);
router.get("/:id", ReviewController.findByProductId);
router.put("/:id", ReviewController.updateByPk);
router.delete("/:id", ReviewController.deleteByPk);

module.exports = router;