import mongoose from "mongoose";
import Booking from "../models/bookingModel.js";
import Room from "../models/roomsModel.js";
import { sendMailWithGmail } from "../util.js/email.js";
import { ObjectId } from "mongodb";
import { SslCommerzPayment } from "sslcommerz";

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

export const paymentRoute = async (req, res) => {
  const transaction_Id = new ObjectId().toString();

  const {
    price,
    img,
    name,
    email,
    address,
    city,
    zip,
    country,
    roomName,
    guests,
    status,
    request,
    phone,
    arrival,
    bookingDates,
    desc,
  } = req.body;

  const data = {
    total_amount: price,
    currency: "BDT",
    product_img: img,
    tran_id: transaction_Id,
    success_url: `${process.env.StoreRoute}/api/booking/payment/success/${transaction_Id}`,
    fail_url: `${process.env.StoreRoute}/api/booking/payment/fail/${transaction_Id}`,
    cancel_url: `${process.env.StoreRoute}/api/booking/payment/cancel/${transaction_Id}`,
    ipn_url: `${process.env.StoreRoute}/ipn`,
    shipping_method: "Courier",
    product_name: roomName,
    product_category: "room",
    product_profile: "general",
    cus_name: name,
    cus_email: email,
    cus_add1: address,
    cus_add2: city,
    cus_city: city,
    cus_state: city,
    cus_postcode: Number(zip),
    cus_country: country,
    cus_phone: phone,
    cus_fax: phone,
    ship_name: name,
    ship_add1: address,
    ship_add2: city,
    ship_city: city,
    ship_state: city,
    ship_postcode: zip,
    ship_country: country,
    multi_card_name: "mastercard",
    arrival: arrival,
    bookingDates: bookingDates,
    desc: desc,
    guests: guests,
    price: price,
    request: request,
    paymentStatus: status,
  };

  const sslcommer = new SslCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASS,
    true,
    "https://securepay.sslcommerz.com/gwprocess/v4/api.php"
  );

  sslcommer
    .init(data)
    .then(async (apiResponse) => {
      const order = new Booking(data);

      try {
        await order.save();
        res
          .status(200)
          .json({ success: true, data: apiResponse.GatewayPageURL });
      } catch (error) {
        res.status(400).json({
          status: false,
          error: error.message,
        });
      }
    })
    .catch((err) =>
      res.status(400).json({
        status: false,
        error: err,
      })
    );
};

export const paymentSuccessRoute = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const booking = await Booking.findOne({
      tran_id: req.params.transaction_Id,
    }).session(session);

    if (!booking) {
      throw new Error("Booking not found");
    }

    // Update room with booking details
    const updatedRoom = await Room.findOneAndUpdate(
      { name: booking.product_name },
      {
        $addToSet: {
          bookings: booking._id,
          unavailableDates: { $each: booking.bookingDates },
        },
        $set: { isAvailable: "Unavailable" },
      },
      { session, new: true }
    );

    if (!updatedRoom) {
      throw new Error("Room not found");
    }

    await Booking.findOneAndUpdate(
      { tran_id: req.params.transaction_Id },
      { $set: { paymentStatus: "Paid" } },
      { session }
    );

    await session.commitTransaction();

    res.redirect(
      `${process.env.DOMAINURL}/payment/success/${req.params.transaction_Id}`
    );
  } catch (error) {
    await session.abortTransaction();
    res.status(500).json({ success: false, error: error.message });
  } finally {
    session.endSession();
  }
};

export const paymentFailRoute = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      tran_id: req.params.transaction_Id,
    });

    if (!booking) {
      throw new Error("Booking not found");
    }

    // Mark the room as Unavailable and add unavailable dates
    await Room.findOneAndUpdate(
      { name: booking.product_name },
      {
        $addToSet: {
          bookings: booking._id,
          unavailableDates: { $each: booking.bookingDates },
        },
        $set: { isAvailable: "Unavailable" },
      }
    );

    res.redirect(
      `${process.env.DOMAINURL}/payment/fail/${req.params.transaction_Id}`
    );
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const paymentCancelRoute = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      tran_id: req.params.transaction_Id,
    });

    if (!booking) {
      throw new Error("Booking not found");
    }

    // Mark the room as Unavailable and add unavailable dates
    await Room.findOneAndUpdate(
      { name: booking.product_name },
      {
        $addToSet: {
          bookings: booking._id,
          unavailableDates: { $each: booking.bookingDates },
        },
        $set: { isAvailable: "Unavailable" },
      }
    );

    res.redirect(
      `${process.env.DOMAINURL}/payment/cancel/${req.params.transaction_Id}`
    );
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getBooking = async (req, res) => {
  const { limit } = req.query;
  console.log(limit);
  const booking = await Booking.find({}).limit(limit).sort({ createdAt: -1 });
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

export const getSingleBooking = async (req, res) => {
  const booking = await Booking.findOne({
    tran_id: req.params.trans_id,
  });
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

export const getIndividualBooking = async (req, res) => {
  const booking = await Booking.findById({
    _id: ObjectId(req.params.id),
  });

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

export const getUserBooking = async (req, res) => {
  const booking = await Booking.find({ cus_email: req.params.email }).sort({
    createdAt: -1,
  });

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

export const deleteBooking = async (req, res) => {
  await Booking.findByIdAndDelete({
    _id: ObjectId(req.params.id),
  });
  try {
    res.status(200).json({
      status: true,
      message: "Booking Deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

export const updatePaymentStatus = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { paymentStatus } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      { _id: ObjectId(bookingId) },
      { paymentStatus },
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
      message: "Payment status updated successfully",
      data: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to update payment status",
      error,
    });
  }
};
