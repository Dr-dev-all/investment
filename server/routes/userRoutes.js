import express from 'express';
import userController from '../controllers/userController.js';
import verifyjwt from '../middlewares/verifyJwt.js';

const router = express.Router();

router.route('/register').post(userController.createNewuser);
router.route('/getallusers').get(userController.getAllUsers);
router.route('/getsingleuser/:id').get(userController.getSingleUser);
router.route('/deactivateuser/:id').patch(userController.deactivateUser);
router.route('/activateuser/:id').patch(userController.activateUser);
router.route('/edituser').patch(userController.updateUser);
router.route('/deleteuser/:id').delete(userController.deleteUser);

export default router;
