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
    investment: { type: String, default: "00" },
    loss: { type: String, default: "00" },
    profit: { type: String, default: "00" },
    plan: { type: String, default: "none" },
    isActive: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
    code: { type: String, default: "" },
    userToken: { type: String, default: "" },
    history: [
      {
        amount: { type: String, default: "" },
        wallet: { type: String, default: "" },
        date: { type: Date, default: Date.now() },
        reqid: { type: String, default: "" },
        email: { type: String, default: "" },
        firstname: { type: String, default: "" },
        lastname: { type: String, default: "" },
        userplan: { type: String, default: "none" },
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

// mongoose.models.User ||
