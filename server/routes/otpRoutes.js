import express from "express";
import checkUser from "../middlewares/checkUsermail.js";

import otpController from "../controllers/otpController.js";

const router = express.Router();

router.route("/generatecode").get(otpController.generateCode);
router.route("/changepassword").post(otpController.updateUserPassword);
// router
//   .route("/otp/changepassword")
//   .post(checkUser, otpController.changePassword);

export default router;
