import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: ["Firstname must be provided"] },
    lastName: { type: String, required: ["Lastname must be provided"] },
    email: {
      type: String,
      required: ["Email must be provided"],
      unique: ["Email already exists"],
    },
    password: { type: String, required: ["Password must be provided"] },
    balance: { type: String, default: "00" },
    plan: { type: String, default: "none" },
    isActive: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
    code: { type: String, default: "" },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
