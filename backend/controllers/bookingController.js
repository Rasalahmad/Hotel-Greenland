import Booking from "../models/bookingModel.js";
import { sendMailWithGmail } from "../util.js/email.js";

export const addBooking = async (req, res) => {
  const booking = new Booking(req.body);
  try {
    const mailData = {
      to: [booking?.email],
      subject: `${booking?.roomName} booked successfully`,
      text: `Dear ${booking?.name}, \n Welcome to Hotel Greenland. ${booking?.roomName} has been booked successfully. \n you have to pay ${booking?.price}tk on cash when checkIn. \n payment status: ${booking?.status} \n Thank you.`,
    };
    await sendMailWithGmail(mailData);

    const result = await booking.save();
    res.status(200).json({
      status: true,
      message: "Booked successfully",
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
