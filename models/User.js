import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    isAdmin: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("User", userSchema);
