import Booking from "../models/bookingModel.js";
import Review from "../models/reviewModel.js";
import { ObjectId } from "mongodb";

export const addReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    const result = await review.save();

    const updatedBooking = await Booking.findOneAndUpdate(
      { _id: req.body.bookingId },
      { isReviewed: true },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({
        status: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Review added successfully",
      data: result,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors = error.errors[key];
      });
      res.status(400).json({
        status: false,
        error: errors,
      });
    } else {
      res.status(500).json({
        status: false,
        message: "Something went wrong",
      });
    }
  }
};

export const getReview = async (req, res) => {
  const review = await Review.find({});
  try {
    res.status(200).json({
      status: true,
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

export const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      { _id: ObjectId(req.params.id) },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      status: true,
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};
