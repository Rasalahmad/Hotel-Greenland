import mongoose from "mongoose";

const roomsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Room name is required"],
      trim: true,
    },
    description: String,
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    images: [{ type: String, required: [true, "Images is required"] }],
    bed: {
      type: Number,
      required: [true, "Please enter the numbe of bed"],
      minLength: [0, "Number of bed can't be negative"],
    },
    max: {
      type: Number,
      required: [true, "Please give capatify of guest"],
      minLength: [0, "Guest capacity can't be negative"],
    },
    space: Number,
    roomView: String,
    amenities: [{ type: String }],
    hasAirCondition: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("rooms", roomsSchema);
export default Room;
