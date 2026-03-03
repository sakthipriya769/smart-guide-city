const express = require("express");
const router = express.Router();
const { getFacilities, addFacility } = require("../controllers/facilityController");

router.get("/", getFacilities);
router.post("/", addFacility);

module.exports = router;