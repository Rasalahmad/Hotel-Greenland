import express from "express";
import { addBooking, getBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", addBooking);
router.get("/", getBooking);

export default router;
