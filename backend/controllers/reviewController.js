const db = require("../config/db");

exports.addReview = (req, res) => {
  const { user_id, place_id, rating, review_text } = req.body;

  const sql = "INSERT INTO reviews VALUES (NULL, ?, ?, ?, ?, NOW())";

  db.query(sql, [user_id, place_id, rating, review_text], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Review Added Successfully" });
  });
};

exports.getReviewsByPlace = (req, res) => {
  db.query(
    "SELECT * FROM reviews WHERE place_id = ?",
    [req.params.place_id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};