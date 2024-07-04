import { Router} from 'express';
const router = Router();

import authController from '../controllers/auth.controller.js';

// ROUTE 1:  Create a User using: POST "/api/auth/createuser". No login required
router.post('/signup', authController.auth);

router.post('/login', authController.login);

router.post('/verify-otp', authController.verifyOtp);

router.post('/resend-otp', authController.resendOtp);

export default router;