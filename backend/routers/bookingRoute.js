import express from "express";
import {
  addBooking,
  getBooking,
  getSingleBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", addBooking);
router.get("/", getBooking);
router.get("/:id", getSingleBooking);

export default router;
