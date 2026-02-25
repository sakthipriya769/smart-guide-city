import pool from '../config/db.js';

export const getFacilities = async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM facilities ORDER BY type, name');
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch facilities.', error: error.message });
  }
};
