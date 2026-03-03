const db = require("../config/db");

exports.getFacilities = (req, res) => {
  db.query("SELECT * FROM facilities", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.addFacility = (req, res) => {
  const { facility_name, type, description, city } = req.body;

  const sql = "INSERT INTO facilities VALUES (NULL, ?, ?, ?, ?)";

  db.query(sql, [facility_name, type, description, city], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Facility Added Successfully" });
  });
};