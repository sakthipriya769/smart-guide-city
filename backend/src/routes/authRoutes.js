import { Router } from 'express';
import { login, registerTourist } from '../controllers/authController.js';

const router = Router();

router.post('/register', registerTourist);
router.post('/login', login);

export default router;
