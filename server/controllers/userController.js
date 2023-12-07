import { User } from '../models/userModels.js';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';
import isEmail from 'validator/lib/isEmail.js';

const getAllUsers = asyncHandler(async (req, res) => {
  const user_id = req.user;
  if (!user_id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const foundUser = await User.findById(user_id);
  if (!foundUser) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // if (foundUser.isAdmin === false) {
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  const users = await User.find().select('-password').lean();
  if (!users?.length) return res.status(400).json({ message: 'No user found' });
  return res.status(200).json({ message: users });
});

const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'User id is required' });
  }

  const foundUser = await User.findById(id).exec();

  if (!foundUser) {
    return res.status(400).json('Invalid user');
  }

  return res.status(200).json({ message: foundUser });
});

const createNewuser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({
      allFields: true,
      errorStatus: true,
      successStatus: false,
      message: 'All fields are required',
    });
  }

  if (!isEmail(email)) {
    return res.status(400).json({
      field: 'email',
      allFields: false,
      errorStatus: true,
      successStatus: false,
      message: 'Invalid mail address',
    });
  }

  const duplicateEmail = await User.findOne({ email })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec();
  if (duplicateEmail) {
    return res.status(409).json({
      field: 'email',
      errorStatus: true,
      successStatus: false,
      message: 'Email already exist',
    });
  }

  if (password?.length < 6) {
    return res.status(400).json({
      errorStatus: true,
      allFields: false,
      successStatus: false,
      field: 'password',
      message: 'Password must be greater than 6 characters',
    });
  }

  if (password.toString().trim() !== confirmPassword.toString().trim()) {
    return res.status(400).json({
      errorStatus: true,
      field: 'confirmPassword',
      allFields: false,
      successStatus: false,
      message: 'Password does not match',
    });
  }

  const hashedPwd = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPwd,
  });
  if (!newUser) {
    return res.status(400).json({
      errorStatus: true,
      successStatus: false,
      allFields: true,
      message: 'wrong user data recieved',
    });
  } else {
    return res.status(201).json({
      errorStatus: false,
      successStatus: true,
      allFields: true,
      message: `Hi ${newUser.firstName}, welcome to BullHarvest`,
    });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const { id, firstName, lastName, email, password, plan, balance } = req.body;
  if (!id || !firstName || !lastName || !email || !plan || !balance) {
    return res.status(400).json({ message: 'All fields are requird' });
  }

  const user = await User.findById(id).exec();
  if (!user) return res.status(400).json({ message: 'User not found' });
  if (!isEmail(email)) {
    return res.status(400).json({ message: 'Invalid mail address' });
  }

  const duplicateEmail = await User.findOne({ email })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec();

  if (duplicateEmail && duplicateEmail._id.toString() !== id) {
    return res.status(409).json({ message: 'Email already exist' });
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.plan = plan;
  user.balance = balance;

  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }

  const updateduser = await user.save();
  if (!updateduser) {
    return res.status(500).send('Error in updating the user');
  }
  return res.status(200).json({ message: 'Successfully Updated' });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'User id is required' });
  }
  const deletedUser = await User.deleteOne({ _id: id }).exec();
  if (!deletedUser) {
    return res.status(404).json({ message: "User doesn't exists" });
  }
  return res.status(200).json({ message: 'Deletion Successful' });
});

const deactivateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'userid must be provided' });
  }

  const foundUser = await User.findById(id).exec();
  if (!foundUser) {
    return res.status(404).json({ message: 'User not found!' });
  }

  if (foundUser.isActive === true && foundUser.isAdmin === false) {
    foundUser.isActive = false;
    const updatedUser = await foundUser.save();
    if (!updatedUser) {
      return res
        .status(500)
        .json({ message: 'Error in deactivating the user!' });
    } else {
      return res
        .status(200)
        .json({ message: `${foundUser.firstName} deactivated successfully` });
    }
  }

  return res.status(400).json({ message: 'Unable to deactivate user' });
});

const activateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'userid must be provided' });
  }

  const foundUser = await User.findById(id).exec();
  if (!foundUser) {
    return res.status(404).json({ message: 'User not found!' });
  }

  if (foundUser.isActive === false && foundUser.isAdmin === false) {
    foundUser.isActive = true;
    const updatedUser = await foundUser.save();
    if (!updatedUser) {
      return res
        .status(500)
        .json({ message: 'Error in activating this user!' });
    } else {
      return res
        .status(200)
        .json({ message: `${foundUser.firstName} activated successfully` });
    }
  }

  return res.status(400).json({ message: 'Unable to activate user' });
});

export default {
  getAllUsers,
  createNewuser,
  updateUser,
  deleteUser,
  getSingleUser,
  deactivateUser,
  activateUser,
};
