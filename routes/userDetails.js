import { Router} from 'express';
const router = Router();

import userDetailsController from '../controllers/userDetails.controller.js';

// ROUTE 1:  Create a User using: POST "/api/auth/createuser". No login required
router.post('/createUserDetails', userDetailsController.createNewUserDetails);

router.get('/getAllUserDetails', userDetailsController.getAllUserDetails);

export default router;