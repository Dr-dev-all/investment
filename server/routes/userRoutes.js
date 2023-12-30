import express from "express";
import userController from "../controllers/userController.js";
import verifyjwt from "../middlewares/verifyJwt.js";
import protectRoutes from "../middlewares/protectRoutes.js";
import headers from "../middlewares/corHeader.js";
import cors from "cors";
import checkAdmin from "../middlewares/checkAdmin.js";
import notAdmin from "../middlewares/notAdmin.js";

const router = express.Router();

router.route("/register").post(userController.createNewuser);
router.route("/getallusers").get(userController.getAllUsers);
router
  .route("/getsingleuser")
  .get(verifyjwt, notAdmin, userController.getSingleUser);
router.route("/deactivateuser/:id").patch(userController.deactivateUser);
router.route("/activateuser/:id").patch(userController.activateUser);
router.route("/edituser").patch(userController.updateUser);
router.route("/deleteuser/:id").delete(userController.deleteUser);
router.route("/withdraw").post(verifyjwt, userController.withdraw);

export default router;
