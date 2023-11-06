import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    star: {
      type: Number,
    },
    msg: {
      type: String,
      required: [true, "Message is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "booking",
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("review", reviewSchema);
export default Review;
