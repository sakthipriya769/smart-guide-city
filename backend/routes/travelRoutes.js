const express = require("express");
const router = express.Router();
const controller = require("../controllers/travelPlannerController");

router.post("/planner", controller.addToPlan);
router.get("/planner", controller.getUserPlans);
router.delete("/planner/:id", controller.deletePlan);

module.exports = router;