import { Router } from 'express';
import { createPlace, getPlaces } from '../controllers/placeController.js';
import { authenticate, authorize } from '../middleware/authMiddleware.js';
import { ROLES } from '../config/constants.js';

const router = Router();

router.get('/', getPlaces);
router.post('/', authenticate, authorize(ROLES.ADMIN), createPlace);

export default router;
