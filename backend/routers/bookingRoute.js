import express from "express";
import {
  addBooking,
  getBooking,
  getIndividualBooking,
  getSingleBooking,
  getUserBooking,
  paymentCancelRoute,
  paymentFailRoute,
  paymentRoute,
  paymentSuccessRoute,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", addBooking);

router.post("/payment", paymentRoute);
router.post("/payment/success/:transaction_Id", paymentSuccessRoute);
router.post("/payment/fail/:transaction_Id", paymentFailRoute);
router.post("/payment/cancel/:transaction_Id", paymentCancelRoute);

router.get("/", getBooking);
router.get("/individual/:id", getIndividualBooking);
router.get("/:email", getUserBooking);
router.get("/transaction/:trans_id", getSingleBooking);

export default router;
