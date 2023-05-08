import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    transID: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Room type is required"],
    },
    phone: {
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
    },
    address: {
      type: String,
    },
    arrival: {
      type: String,
    },
    city: {
      type: String,
    },
    img: {
      type: String,
    },
    request: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("booking", bookingSchema);
export default Booking;
