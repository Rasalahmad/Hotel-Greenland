import mongoose from "mongoose";

const sliderSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    copyright: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Slider = mongoose.model("slider", sliderSchema);
export default Slider;
