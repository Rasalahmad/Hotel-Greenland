import News from "../models/newsModel.js";
import { ObjectId } from "mongodb";

export const addNews = async (req, res) => {
  const news = new News(req.body);
  try {
    const result = await news.save();
    res.status(200).json({
      status: true,
      message: "News added successfully",
      data: result,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors = error.errors[key];
      });
      return res.status(400).json({
        status: false,
        error: errors,
      });
    }
    res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

export const getNews = async (req, res) => {
  const news = await News.find({});
  try {
    res.status(200).json({
      status: true,
      data: news,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

export const deleteNews = async (req, res) => {
  await News.findByIdAndDelete({
    _id: ObjectId(req.params.id),
  });
  try {
    res.status(200).json({
      status: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};
