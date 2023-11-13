import mongoose from "mongoose";

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    link: { type: String },
    desc: { type: String },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("news", newsSchema);
export default News;
