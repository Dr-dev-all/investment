import { User } from "../models/userModels.js";

const checkAdmin = async (req, res, next) => {
  const userId = req.user;

  try {
    const foundUser = await User.findById(userId).exec();
    if (!foundUser) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    if (foundUser.isAdmin === false) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // let foundId;

    if (foundUser.isAdmin) {
      req.user = foundUser._id;
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

export default checkAdmin;
