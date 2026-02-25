import pool from '../config/db.js';

export const getAdminReport = async (_req, res) => {
  try {
    const [[users]] = await pool.query('SELECT COUNT(*) as totalUsers FROM users');
    const [[places]] = await pool.query('SELECT COUNT(*) as totalPlaces FROM tourist_places');
    const [[plans]] = await pool.query('SELECT COUNT(*) as totalPlans FROM travel_plans');
    const [[reviews]] = await pool.query('SELECT COUNT(*) as totalReviews FROM reviews');

    return res.json({ users, places, plans, reviews });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to generate admin report.', error: error.message });
  }
};
