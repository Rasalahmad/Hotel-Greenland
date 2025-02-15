import express from "express";
import {
  addBooking,
  deleteBooking,
  getBooking,
  getIndividualBooking,
  getSingleBooking,
  getUserBooking,
  paymentCancelRoute,
  paymentFailRoute,
  paymentRoute,
  paymentSuccessRoute,
  updatePaymentStatus,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", addBooking);

router.post("/payment", paymentRoute);
router.post("/payment/success/:transaction_Id", paymentSuccessRoute);
router.post("/payment/fail/:transaction_Id", paymentFailRoute);
router.post("/payment/cancel/:transaction_Id", paymentCancelRoute);

router.get("/", getBooking);
router.put("/payment-status/:bookingId", updatePaymentStatus);
router.get("/individual/:id", getIndividualBooking);
router.get("/:email", getUserBooking);
router.get("/transaction/:trans_id", getSingleBooking);
router.delete("/:id", deleteBooking);

export default router;
