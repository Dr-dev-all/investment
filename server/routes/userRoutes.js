import express from "express";
import userController from "../controllers/userController.js";
import verifyjwt from "../middlewares/verifyJwt.js";
import protectRoutes from "../middlewares/protectRoutes.js";

const router = express.Router();

router.route("/register").post(userController.createNewuser);
router.route("/getallusers").get(verifyjwt, userController.getAllUsers);
router.route("/getsingleuser").get(verifyjwt, userController.getSingleUser);
router.route("/deactivateuser/:id").patch(userController.deactivateUser);
router.route("/activateuser/:id").patch(userController.activateUser);
router.route("/edituser").patch(userController.updateUser);
router.route("/deleteuser/:id").delete(userController.deleteUser);

export default router;
