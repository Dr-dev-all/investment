import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: ['Firstname must be provided'] },
  lastName: { type: String, required: ['Lastname must be provided'] },
  email: {
    type: String,
    required: ['Email must be provided'],
    unique: ['Email already exists'],
  },
  password: { type: String, required: ['Password must be provided'] },
  isAdmin: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  plan: { type: String, default: 'none' },
  balance: { type: Number, default: 0 },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
