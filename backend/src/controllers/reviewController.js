import pool from '../config/db.js';

export const getReviews = async (_req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT r.id, r.rating, r.comment, r.place_id, u.name AS tourist_name, p.title AS place_name
      FROM reviews r
      JOIN users u ON u.id = r.user_id
      JOIN tourist_places p ON p.id = r.place_id
      ORDER BY r.created_at DESC
    `);
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch reviews.', error: error.message });
  }
};

export const createReview = async (req, res) => {
  const { place_id, rating, comment } = req.body;

  if (!place_id || !rating) {
    return res.status(400).json({ message: 'Place and rating are required.' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO reviews (user_id, place_id, rating, comment) VALUES (?, ?, ?, ?)',
      [req.user.id, place_id, rating, comment || '']
    );

    return res.status(201).json({ id: result.insertId, user_id: req.user.id, place_id, rating, comment: comment || '' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create review.', error: error.message });
  }
};
