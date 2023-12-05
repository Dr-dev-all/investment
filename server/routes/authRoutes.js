import express from 'express';
import authController from '../controllers/authController.js';
import loginLimiter from '../middlewares/loginLimiter.js';

const router = express.Router();

router.route('/login').post(loginLimiter, authController.login);
router.route('/refresh').get(authController.refresh);
router.route('/logout').post(authController.logout);

export default router;
