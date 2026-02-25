import { Router } from 'express';
import { createReview, getReviews } from '../controllers/reviewController.js';
import { authenticate, authorize } from '../middleware/authMiddleware.js';
import { ROLES } from '../config/constants.js';

const router = Router();

router.get('/', getReviews);
router.post('/', authenticate, authorize(ROLES.TOURIST), createReview);

export default router;
