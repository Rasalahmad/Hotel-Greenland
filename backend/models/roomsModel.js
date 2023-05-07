import mongoose from "mongoose";

const roomsSchema = mongoose.Schema(
  {
    roomType: {
      type: String,
      required: [true, "Room type is required"],
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is requuied"],
    },
    images: [
      {
        original: {
          type: String,
          required: true,
        },
        thumbnail: {
          type: String,
          required: true,
        },
      },
    ],
    name: {
      type: String,
      required: [true, "Room name is required"],
      trim: true,
    },
    guests: Number,
    weekPrice: Number,
    desc: String,
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    isAvailable: {
      type: String,
      enum: ["Available", "Unavailable"],
      default: "Available",
    },
    services: [
      {
        title: String,
        icon: String,
      },
    ],
    around: [
      {
        image: String,
        title: String,
      },
    ],
    facilities: [
      {
        title: String,
        icon: String,
      },
    ],
    unavailableDates: {
      type: [Date],
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("rooms", roomsSchema);
export default Room;
