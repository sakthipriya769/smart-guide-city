import { Router } from 'express';
import { getFacilities } from '../controllers/facilityController.js';

const router = Router();

router.get('/', getFacilities);

export default router;
