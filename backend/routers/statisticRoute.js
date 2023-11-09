import express from "express";
import {
  getBookingTransaction,
  getWidgetStatistic,
} from "../controllers/statisticController.js";

const router = express.Router();

router.get("/widget", getWidgetStatistic);
router.get("/bookingTransaction", getBookingTransaction);

export default router;
