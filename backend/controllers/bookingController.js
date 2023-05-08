import Booking from "../models/bookingModel.js";

export const addBooking = async (req, res) => {
  const booking = new Booking(req.body);
  try {
    const result = await booking.save();
    res.status(200).json({
      status: true,
      message: "Book successfully",
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

export const getBooking = async (req, res) => {
  const booking = await Booking.find({});
  try {
    res.status(200).json({
      status: true,
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};
