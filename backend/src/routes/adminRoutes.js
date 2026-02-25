import { Router } from 'express';
import { getAdminReport } from '../controllers/adminController.js';
import { authenticate, authorize } from '../middleware/authMiddleware.js';
import { ROLES } from '../config/constants.js';

const router = Router();

router.get('/report', authenticate, authorize(ROLES.ADMIN), getAdminReport);

export default router;
