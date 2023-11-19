import { ObjectId } from "mongodb";
import Slider from "../models/sliderModel.js";

export const addSlider = async (req, res) => {
  const room = new Slider(req.body);
  try {
    const result = await room.save();
    res.status(200).json({
      status: true,
      message: "Slider added successfully",
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

export const getSlider = async (req, res) => {
  try {
    const result = await Slider.find();
    res.status(200).json({
      status: true,
      message: "Slider fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

export const deleteSlider = async (req, res) => {
  try {
    const result = await Slider.findByIdAndDelete({
      _id: ObjectId(req.params.id),
    });
    res.status(200).json({
      status: true,
      message: "Slider deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};
