const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET all tourist places
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM tourist_places");
    res.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;