const db = require("../config/db");

// Add to itinerary
exports.addToPlan = async (req, res) => {
  try {
    const { user_name, place_id, travel_date, notes } = req.body;

    const sql = `
      INSERT INTO travel_plans (user_name, place_id, travel_date, notes)
      VALUES (?, ?, ?, ?)
    `;

    await db.query(sql, [user_name, place_id, travel_date, notes]);

    res.json({ message: "Added successfully" });
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Get user plans
exports.getUserPlans = async (req, res) => {
  try {
    const { user_name } = req.query;

    const sql = `
      SELECT 
        tp.id,
        tp.travel_date,
        tp.notes,
        t.name,
        t.district,
        t.image_url
      FROM travel_plans tp
      JOIN tourist_places t ON tp.place_id = t.id
      WHERE tp.user_name = ?
      ORDER BY tp.travel_date ASC
    `;

    const [rows] = await db.query(sql, [user_name]);

    res.json(rows);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Delete plan
exports.deletePlan = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM travel_plans WHERE id = ?", [id]);

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ error: "Delete failed" });
  }
};