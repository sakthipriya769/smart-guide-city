import { Router } from 'express';
import { createPlan, getMyPlans } from '../controllers/travelPlanController.js';
import { authenticate, authorize } from '../middleware/authMiddleware.js';
import { ROLES } from '../config/constants.js';

const router = Router();

router.get('/my', authenticate, authorize(ROLES.TOURIST), getMyPlans);
router.post('/', authenticate, authorize(ROLES.TOURIST), createPlan);

export default router;
