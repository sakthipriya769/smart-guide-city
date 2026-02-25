import pool from '../config/db.js';

export const getMyPlans = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM travel_plans WHERE user_id = ? ORDER BY date ASC', [req.user.id]);
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch travel plans.', error: error.message });
  }
};

export const createPlan = async (req, res) => {
  const { date, title, notes } = req.body;
  if (!date || !title) {
    return res.status(400).json({ message: 'Date and title are required.' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO travel_plans (user_id, date, title, notes) VALUES (?, ?, ?, ?)',
      [req.user.id, date, title, notes || '']
    );

    return res.status(201).json({ id: result.insertId, user_id: req.user.id, date, title, notes: notes || '' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create travel plan.', error: error.message });
  }
};
