const express = require("express");
const router = express.Router();
const { addReview, getReviewsByPlace } = require("../controllers/reviewController");

router.post("/", addReview);
router.get("/:place_id", getReviewsByPlace);

module.exports = router;