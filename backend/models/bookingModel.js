import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    total_amount: Number,
    currency: String,
    product_img: String,
    tran_id: String,
    success_url: String,
    fail_url: String,
    cancel_url: String,
    ipn_url: String,
    shipping_method: String,
    product_name: String,
    product_category: String,
    product_profile: String,
    cus_name: String,
    cus_email: String,
    cus_add1: String,
    cus_add2: String,
    cus_city: String,
    cus_state: String,
    cus_postcode: Number,
    cus_country: String,
    cus_phone: String,
    cus_fax: String,
    ship_name: String,
    ship_add1: String,
    ship_add2: String,
    ship_city: String,
    ship_state: String,
    ship_postcode: Number,
    ship_country: String,
    multi_card_name: String,
    arrival: String,
    bookingDates: [String],
    desc: String,
    guests: String,
    price: Number,
    request: String,
    paymentStatus: {
      type: String,
      default: "Pending",
    },
    isReviewed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create a Mongoose model using the schema
const Booking = mongoose.model("booking", bookingSchema);

export default Booking;
