import Booking from "../models/bookingModel.js";
import { sendMailWithGmail } from "../util.js/email.js";
import { ObjectId } from "mongodb";
import { SslCommerzPayment } from "sslcommerz";
import express from "express";

const router = express.Router();

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
    false
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
  console.log("hit");
  try {
    const booking = await Booking.findOne({
      tran_id: req.params.transaction_Id,
    });

    const result = await Booking.findOneAndUpdate(
      {
        tran_id: req.params.transaction_Id,
      },
      {
        $set: {
          paymentStatus: "Paid",
        },
      }
    );
    res.redirect(
      `${process.env.DOMAINURL}/payment/success/${req.params.transaction_Id}`
    );
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

export const paymentFailRoute = async (req, res) => {
  try {
    await Booking.deleteOne(req.params.transaction_Id);
    res.redirect(`${process.env.DOMAINURL}/payment/fail/${transaction_Id}`);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

export const paymentCancelRoute = async (req, res) => {
  try {
    const result = await Booking.findOneAndUpdate(
      {
        tran_id: req.params.transaction_Id,
      },
      {
        $set: {
          paymentStatus: "Pending",
        },
      }
    );
    res.redirect(`${process.env.DOMAINURL}/payment/cancel/${transaction_Id}`);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

export const getBooking = async (req, res) => {
  const booking = await Booking.find({});
  console.log(booking);
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
    tran_id: ObjectId(req.params.trans_id),
  });
  console.log(booking);
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
