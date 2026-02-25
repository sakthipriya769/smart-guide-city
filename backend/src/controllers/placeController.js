import pool from '../config/db.js';

export const getPlaces = async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tourist_places ORDER BY created_at DESC');
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch tourist places.', error: error.message });
  }
};

export const createPlace = async (req, res) => {
  const { title, description, location, category } = req.body;
  if (!title || !description || !location || !category) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO tourist_places (title, description, location, category) VALUES (?, ?, ?, ?)',
      [title, description, location, category]
    );
    return res.status(201).json({ id: result.insertId, title, description, location, category });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create tourist place.', error: error.message });
  }
};
