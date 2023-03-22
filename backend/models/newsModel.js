import mongoose from "mongoose";

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    date: Date,
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    link: String,
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("news", newsSchema);
export default News;
