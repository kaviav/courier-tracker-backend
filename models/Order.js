import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    TrackingID: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    Address_f: {
      type: String,
      required: true,
      trim: true,
      unique: false,
      lowercase: true,
    },

    Address_t: {
      type: String,
      required: true,
      trim: true,
      unique: false,
      lowercase: true,
    },

    Cost: {
      type: String,
      required: true,
      trim: true,
      unique: false,
      lowercase: true,
    },

    Carrier: {
      type: String,
      required: true,
      trim: true,
      unique: false,
      lowercase: true,
    },

    Size: {
      type: String,
      required: true,
      trim: true,
      unique: false,
      lowercase: true,
    },

    Weight: {
      type: String,
      required: true,
      trim: true,
      unique: false,
      lowercase: true,
    },

    PriorityStatus: {
      type: String,
      required: false,
      trim: true,
      unique: false,
      lowercase: true,
    },

    PaymentStatus: {
      type: String,
      default: "Paid",
    },

    OrderStatus: {
      type: String,
      default: "Shipped",
    },
    Location: {
      type: String,
      required: false,
      trim: true,
      unique: false,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("Order", orderSchema);
