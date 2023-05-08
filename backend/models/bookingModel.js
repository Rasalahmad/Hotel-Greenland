import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    transID: {
      type: String,
    },
    customer: {
      type: String,
      required: [true, "Room type is required"],
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    roomName: {
      type: String,
      required: [true, "Thumbnail is requuied"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    bookingDates: { type: [Date] },
    guests: Number,
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("booking", bookingSchema);
export default Booking;
