const db = require("../config/db");

exports.addTravelPlan = (req, res) => {
  const { user_id, place_id, travel_date } = req.body;

  const sql = "INSERT INTO travel_plans VALUES (NULL, ?, ?, ?)";

  db.query(sql, [user_id, place_id, travel_date], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Travel Plan Saved" });
  });
};

exports.getUserPlans = (req, res) => {
  db.query(
    "SELECT * FROM travel_plans WHERE user_id = ?",
    [req.params.user_id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};