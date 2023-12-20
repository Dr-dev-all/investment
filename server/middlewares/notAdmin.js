import { User } from "../models/userModels.js";

const notAdmin = async (req, res, next) => {
  const userId = req.user;
  try {
    const foundUser = await User.findById(userId).exec();

    if (!foundUser) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (foundUser.isAdmin === true) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (foundUser.isAdmin === false) {
      req.user = foundUser._id;
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

export default notAdmin;
