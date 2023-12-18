import express from "express";

import otpController from "../controllers/otpController.js";

const router = express.Router();

router.route("/generateotp").get(otpController.generateOpt);

export default router;
