const db = require("../config/db");

// GET ALL PLACES
exports.getAllPlaces = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM tourist_places ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ADD PLACE
exports.addPlace = async (req, res) => {
  try {
    const { name, district, category, description, image_url } = req.body;

    const sql =
      "INSERT INTO tourist_places (name, district, category, description, image_url) VALUES (?, ?, ?, ?, ?)";

    await db.query(sql, [name, district, category, description, image_url]);

    res.json({ message: "Place Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE PLACE
exports.deletePlace = async (req, res) => {
  try {
    await db.query("DELETE FROM tourist_places WHERE id = ?", [
      req.params.id,
    ]);

    res.json({ message: "Place Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};