import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import placeRoutes from './routes/placeRoutes.js';
import facilityRoutes from './routes/facilityRoutes.js';
import travelPlanRoutes from './routes/travelPlanRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', app: 'SMART GUIDE CITY API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/plans', travelPlanRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);

app.listen(port, () => {
  console.log(`SMART GUIDE CITY API running on port ${port}`);
});
