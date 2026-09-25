import express from 'express'
import { createUser, loginUser, logoutUser, getCurrentUserProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', protect, getCurrentUserProfile);

export default router;