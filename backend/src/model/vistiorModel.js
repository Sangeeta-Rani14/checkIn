import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    orgId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",   // enables populate()
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    purpose: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "checked_in", "checked_out"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Visitor", visitorSchema);
